import type {
  CenterControlData,
  KeyLabel,
  KeyboardKeyData,
  KeyboardLayout
} from './KeyboardKey.ts'

export function createKeyboardPanel(title: string, layout: KeyboardLayout): HTMLElement {
  const panel = document.createElement('section')
  panel.className = 'panel'
  panel.dataset.panel = layout.id

  const head = document.createElement('header')
  head.className = 'panel-head'

  const heading = document.createElement('h2')
  heading.textContent = title

  const meta = document.createElement('p')
  meta.className = 'panel-meta'
  meta.textContent = 'EN-US  ·  QWERTY'

  head.append(heading, meta)

  const scaler = document.createElement('div')
  scaler.className = 'keyboard-scale'
  const frame = document.createElement('div')
  frame.className = 'keyboard-frame'
  frame.append(createKeyboard(layout))
  scaler.append(frame)

  const scroller = document.createElement('div')
  scroller.className = 'panel-scroll'
  scroller.append(scaler)

  panel.append(head, scroller)
  return panel
}

export function createKeyboard(layout: KeyboardLayout): HTMLElement {
  const board = document.createElement('div')
  board.className = 'keyboard'
  board.dataset.layout = layout.id
  board.style.width = `${layout.width}px`
  board.style.height = `${layout.height}px`
  board.setAttribute('role', 'group')
  board.setAttribute('aria-label', `${layout.title.kicker}, ${layout.title.layer}`)

  board.append(createKeyboardTitle(layout))

  for (const control of layout.controls) {
    board.append(createControl(control))
  }

  layout.keys.forEach((key, index) => {
    board.append(createKey(key, index))
  })

  return board
}

function createKeyboardTitle(layout: KeyboardLayout): HTMLElement {
  const title = document.createElement('div')
  title.className = 'keyboard-title'

  const kicker = document.createElement('p')
  kicker.className = 'keyboard-title-kicker'
  kicker.textContent = layout.title.kicker

  const layer = document.createElement('p')
  layer.className = 'keyboard-title-layer'
  layer.textContent = layout.title.layer

  title.append(kicker, layer)
  return title
}

function createKey(key: KeyboardKeyData, index: number): HTMLElement {
  const el = document.createElement('div')
  const classes = ['key']
  if (key.variant === 'accent') classes.push('key-accent')
  if (key.className) classes.push(key.className)
  el.className = classes.join(' ')
  el.dataset.keyId = key.id
  if (key.note) el.dataset.note = key.note
  el.style.left = `${key.x}px`
  el.style.top = `${key.y}px`
  el.style.width = `${key.width}px`
  el.style.height = `${key.height}px`
  el.style.zIndex = String(index + 1)
  el.style.transformOrigin = '0 0'
  el.style.transform = `rotate(${key.rotation}deg)`
  el.setAttribute('aria-label', labelFor(key))
  if (key.note) el.title = key.note

  if (key.className?.includes('has-home')) {
    const house = document.createElement('span')
    house.className = 'glyph-home'
    house.setAttribute('aria-hidden', 'true')
    const roof = document.createElement('span')
    roof.className = 'glyph-home-roof'
    const walls = document.createElement('span')
    walls.className = 'glyph-home-walls'
    house.append(roof, walls)
    el.append(house)
  }

  if (key.primary) {
    appendLabel(el, {
      text: key.primary,
      placement: key.primaryPlacement ?? (key.secondary?.length ? 'bottom' : 'center'),
      size: key.primarySize ?? 16,
      className: key.primaryClassName
    })
  }

  for (const secondary of key.secondary ?? []) {
    appendLabel(el, secondary)
  }

  return el
}

function appendLabel(parent: HTMLElement, label: KeyLabel): void {
  const span = document.createElement('span')
  span.className = label.className ? `key-label ${label.className}` : 'key-label'
  span.dataset.place = label.placement
  span.style.setProperty('--label-size', `${label.size}px`)
  if (label.offsetY) span.style.setProperty('--nudge', `${label.offsetY}px`)
  if (label.className?.split(' ').includes('key-mods')) {
    for (const glyph of label.text.replace(/\s+/g, '')) {
      const item = document.createElement('span')
      item.textContent = glyph
      span.append(item)
    }
  } else {
    span.textContent = label.text
  }
  parent.append(span)
}

function labelFor(key: KeyboardKeyData): string {
  if (key.ariaLabel) return key.ariaLabel
  const parts = [...(key.secondary?.map((item) => item.text) ?? []), key.primary].filter(Boolean)
  return parts.join(' ') || key.id
}

function createControl(control: CenterControlData): HTMLElement {
  const el = document.createElement('div')
  el.className = `control control-${control.kind}`
  el.dataset.controlId = control.id
  el.style.left = `${control.x}px`
  el.style.top = `${control.y}px`
  el.style.width = `${control.size}px`
  el.style.height = `${control.size}px`
  el.style.setProperty('--needle', `${control.needle}deg`)
  el.setAttribute('aria-hidden', 'true')

  const badge = document.createElement('div')
  badge.className = 'control-badge'
  const layers = document.createElement('span')
  layers.className = 'glyph-layers'
  const badgeText = document.createElement('span')
  badgeText.textContent = control.badge
  badge.append(layers, badgeText)

  const label = document.createElement('span')
  label.className = 'control-label'
  label.textContent = control.label

  const mouse = document.createElement('span')
  mouse.className = `mouse mouse-${control.kind}`

  const dial = document.createElement('span')
  dial.className = 'dial'

  el.append(badge, label, mouse, dial)
  return el
}
