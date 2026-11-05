import type { KeyAssignment, KeyboardLayout } from './KeyboardKey.ts'
import { createGo60Layout } from './go60Layout.ts'

const kicker = 'Go60 midGard Layout'

function symbol(text: string, color: string, size = 18): KeyAssignment {
  return {
    primary: text,
    primarySize: size,
    primaryPlacement: 'center',
    primaryClassName: 'key-home',
    className: color,
    ariaLabel: text
  }
}

function word(text: string, color: string, size = 14): KeyAssignment {
  return {
    primary: text,
    primarySize: size,
    primaryPlacement: 'center',
    primaryClassName: 'label-tight',
    className: color,
    ariaLabel: text
  }
}

function marked(glyph: string, name: string, color: string): KeyAssignment {
  return {
    primary: name,
    primarySize: 12,
    primaryPlacement: 'bottom',
    primaryClassName: 'label-tight',
    secondary: [{ text: glyph, placement: 'top', size: 16, className: 'key-home' }],
    className: color,
    ariaLabel: `${glyph} ${name}`
  }
}

function macModifiers(): KeyAssignment {
  return {
    primary: '⌘\n⌥\n⌃',
    primarySize: 15,
    primaryPlacement: 'center',
    primaryClassName: 'key-mods',
    className: 'key-yellow',
    ariaLabel: 'command option control'
  }
}

function layerMark(number: string, other: string): KeyAssignment {
  return {
    primary: 'layer',
    primarySize: 12,
    primaryPlacement: 'center',
    primaryClassName: 'label-tight',
    secondary: [
      { text: number, placement: 'top', size: 14 },
      { text: `↑ ${other}`, placement: 'bottom', size: 12 }
    ],
    className: 'key-green',
    ariaLabel: `${number} layer ${other}`
  }
}

const blue = 'key-blue'
const orange = 'key-orange'
const red = 'key-red'
const yellow = 'key-yellow'
const white = 'key-white'

function layer1(): Record<string, KeyAssignment> {
  return {
    'lh-c0-r0': macModifiers(),
    'lh-c0-r1': symbol('Q', blue),
    'lh-c0-r2': marked('⌥', 'option', yellow),
    'lh-c0-r3': marked('⌃', 'control', yellow),

    'lh-c1-r0': symbol('-', blue),
    'lh-c1-r1': symbol('B', blue),
    'lh-c1-r2': symbol('A', blue),
    'lh-c1-r3': marked('⌘', 'command', yellow),

    'lh-c2-r0': symbol('\'', blue),
    'lh-c2-r1': symbol('W', blue),
    'lh-c2-r2': symbol('R', blue),
    'lh-c2-r3': symbol('X', blue),

    'lh-c3-r0': symbol('\'', blue),
    'lh-c3-r1': symbol('F', blue),
    'lh-c3-r2': symbol('S', blue),
    'lh-c3-r3': symbol('C', blue),

    'lh-c4-r0': symbol(',', orange),
    'lh-c4-r1': symbol('P', blue),
    'lh-c4-r2': symbol('T', blue),
    'lh-c4-r3': symbol('V', blue),

    'lh-c5-r0': symbol('"', orange),
    'lh-c5-r1': symbol('G', blue),
    'lh-c5-r2': symbol('D', blue),
    'lh-c5-r3': symbol('-', orange),

    'rh-c5-r0': symbol('?', orange),
    'rh-c5-r1': symbol('J', blue),
    'rh-c5-r2': symbol('•', orange),
    'rh-c5-r3': symbol(',', orange),

    'rh-c4-r0': symbol('!', orange),
    'rh-c4-r1': symbol('L', blue),
    'rh-c4-r2': symbol('N', blue),
    'rh-c4-r3': word('space', orange),

    'rh-c3-r0': symbol('Å', blue),
    'rh-c3-r1': symbol('U', blue),
    'rh-c3-r2': symbol('E', blue),
    'rh-c3-r3': symbol('H', blue),

    'rh-c2-r0': symbol('Ä', blue),
    'rh-c2-r1': symbol('Y', blue),
    'rh-c2-r2': symbol('I', blue),
    'rh-c2-r3': symbol('M', blue),

    'rh-c1-r0': symbol('ö', blue),
    'rh-c1-r1': symbol('K', blue),
    'rh-c1-r2': symbol('O', blue),
    'rh-c1-r3': marked('⌘', 'command', yellow),

    'rh-c0-r0': macModifiers(),
    'rh-c0-r1': symbol('Z', blue),
    'rh-c0-r2': marked('⌥', 'option', yellow),
    'rh-c0-r3': marked('⌃', 'control', yellow),

    'lh-c2-r4': word('esc', white, 15),
    'lh-c3-r4': symbol('↑', red, 22),
    'lh-c4-r4': symbol('↓', red, 22),
    'lh-thumb-layer': marked('⇥', 'tab', white),
    'lh-thumb-shift': marked('↑', 'shift', yellow),
    'lh-thumb-ctrl': layerMark('2', '4'),

    'rh-thumb-alt': layerMark('1', '3'),
    'rh-thumb-space': marked('↑', 'shift', yellow),
    'rh-thumb-mod': marked('⏎', 'return', white),
    'rh-c4-r4': symbol('←', red, 22),
    'rh-c3-r4': symbol('→', red, 22),
    'rh-c2-r4': marked('⌫', 'backspace', white)
  }
}

function layer2(): Record<string, KeyAssignment> {
  return {
    'lh-c0-r0': macModifiers(),
    'lh-c0-r1': symbol('/', blue),
    'lh-c0-r2': marked('⌥', 'option', yellow),
    'lh-c0-r3': marked('⌃', 'control', yellow),

    'lh-c1-r0': symbol('\\', blue),
    'lh-c1-r1': symbol('*', blue),
    'lh-c1-r2': symbol('0', blue),
    'lh-c1-r3': marked('⌘', 'command', yellow),

    'lh-c2-r0': symbol('|', blue),
    'lh-c2-r1': symbol('7', blue),
    'lh-c2-r2': symbol('4', blue),
    'lh-c2-r3': symbol('1', blue),

    'lh-c3-r0': symbol('&', blue),
    'lh-c3-r1': symbol('8', blue),
    'lh-c3-r2': symbol('5', blue),
    'lh-c3-r3': symbol('2', blue),

    'lh-c4-r0': symbol('\'', orange),
    'lh-c4-r1': symbol('9', blue),
    'lh-c4-r2': symbol('6', blue),
    'lh-c4-r3': symbol('3', blue),

    'lh-c5-r0': symbol('"', orange),
    'lh-c5-r1': symbol('+', blue),
    'lh-c5-r2': symbol('=', blue),
    'lh-c5-r3': symbol('-', orange),

    'rh-c5-r0': symbol('?', orange),
    'rh-c5-r1': symbol('@', blue),
    'rh-c5-r2': symbol('•', orange),
    'rh-c5-r3': symbol(',', orange),

    'rh-c4-r0': symbol('!', orange),
    'rh-c4-r1': symbol(')', blue),
    'rh-c4-r2': symbol('(', blue),
    'rh-c4-r3': word('space', orange),

    'rh-c3-r0': symbol('^', blue),
    'rh-c3-r1': symbol('>', blue),
    'rh-c3-r2': symbol('<', blue),
    'rh-c3-r3': symbol('$', blue),

    'rh-c2-r0': symbol('~', blue),
    'rh-c2-r1': symbol('}', blue),
    'rh-c2-r2': symbol('{', blue),
    'rh-c2-r3': symbol('#', blue),

    'rh-c1-r0': {
      primary: '‰',
      primarySize: 18,
      primaryPlacement: 'bottom',
      primaryClassName: 'key-home',
      secondary: [{ text: '%', placement: 'top', size: 18, className: 'key-home' }],
      className: `${white} key-pair`,
      ariaLabel: '% ‰'
    },
    'rh-c1-r1': symbol(']', blue),
    'rh-c1-r2': symbol('[', blue),
    'rh-c1-r3': marked('⌘', 'command', yellow),

    'rh-c0-r0': macModifiers(),
    'rh-c0-r1': symbol('%', blue),
    'rh-c0-r2': marked('⌥', 'option', yellow),
    'rh-c0-r3': marked('⌃', 'control', yellow),

    'lh-c2-r4': word('esc', white, 15),
    'lh-c3-r4': symbol('↑', red, 22),
    'lh-c4-r4': symbol('↓', red, 22),
    'lh-thumb-layer': marked('⇥', 'tab', white),
    'lh-thumb-shift': marked('↑', 'shift', yellow),
    'lh-thumb-ctrl': layerMark('2', '4'),

    'rh-thumb-alt': layerMark('1', '3'),
    'rh-thumb-space': marked('↑', 'shift', yellow),
    'rh-thumb-mod': marked('⏎', 'return', white),
    'rh-c4-r4': symbol('←', red, 22),
    'rh-c3-r4': symbol('→', red, 22),
    'rh-c2-r4': marked('⌫', 'backspace', white)
  }
}

export const midGardLayer1A: Record<string, KeyAssignment> = structuredClone(layer1())

for (const key of Object.values(midGardLayer1A)) {
  if (key.className !== blue) continue
  if (!/^\p{Lu}$/u.test(key.primary)) continue
  const lower = key.primary.toLowerCase()
  if (key.ariaLabel === key.primary) key.ariaLabel = lower
  key.primary = lower
}

export const midGardLayer1B: Record<string, KeyAssignment> = structuredClone(layer1())
export const midGardLayer2A: Record<string, KeyAssignment> = structuredClone(layer2())
export const midGardLayer2B: Record<string, KeyAssignment> = structuredClone(layer2())

const bPunctuation: Record<string, string> = {
  '.': ':',
  '•': ':',
  ',': ';'
}

for (const layer of [midGardLayer1B, midGardLayer2B]) {
  for (const key of Object.values(layer)) {
    const next = bPunctuation[key.primary]
    if (!next) continue
    if (key.ariaLabel === key.primary) key.ariaLabel = next
    key.primary = next
  }
}

for (const key of Object.values(midGardLayer2B)) {
  if (!key.className?.split(' ').includes(blue)) continue
  key.primary = ''
  delete key.secondary
}

const layer2BArrows: Record<string, string> = {
  'lh-c1-r2': '←',
  'lh-c2-r2': '↑',
  'lh-c3-r2': '↓',
  'lh-c4-r2': '→'
}

for (const [id, arrow] of Object.entries(layer2BArrows)) {
  const key = midGardLayer2B[id]
  key.primary = arrow
  key.ariaLabel = arrow
}

for (const layer of [midGardLayer1B, midGardLayer2B]) {
  for (const key of Object.values(layer)) {
    if (key.primary !== '-') continue
    if (key.ariaLabel === key.primary) key.ariaLabel = '_'
    key.primary = '_'
  }
}

for (const layer of [midGardLayer2A, midGardLayer2B]) {
  const key = layer['rh-c1-r0']
  key.primary = '‰'
  key.primaryPlacement = 'center'
  key.primaryClassName = 'key-home'
  key.className = 'key-pink'
  key.ariaLabel = '‰'
  delete key.secondary
}

function layoutFor(
  id: string,
  layer: string,
  assignment: Record<string, KeyAssignment>
): KeyboardLayout {
  return createGo60Layout(id, assignment, { kicker, layer })
}

export const midGardLayer1ALayout = layoutFor('midgard-1a', 'Layer 1A', midGardLayer1A)
export const midGardLayer1BLayout = layoutFor('midgard-1b', 'Layer 1B', midGardLayer1B)
export const midGardLayer2ALayout = layoutFor('midgard-2a', 'Layer 2A', midGardLayer2A)
export const midGardLayer2BLayout = layoutFor('midgard-2b', 'Layer 2B', midGardLayer2B)

export const midgardBoards: { title: string, layout: KeyboardLayout }[] = [
  { title: 'Layer 2A', layout: midGardLayer2ALayout },
  { title: 'Layer 1A', layout: midGardLayer1ALayout },
  { title: 'Layer 2B', layout: midGardLayer2BLayout },
  { title: 'Layer 1B', layout: midGardLayer1BLayout }
]
