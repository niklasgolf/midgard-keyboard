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

    'lh-c1-r0': symbol('—', blue),
    'lh-c1-r1': symbol('B', blue),
    'lh-c1-r2': symbol('A', blue),
    'lh-c1-r3': marked('⌘', 'command', yellow),

    'lh-c2-r0': symbol('´', blue),
    'lh-c2-r1': symbol('W', blue),
    'lh-c2-r2': symbol('R', blue),
    'lh-c2-r3': symbol('X', blue),

    'lh-c3-r0': symbol('`', blue),
    'lh-c3-r1': symbol('F', blue),
    'lh-c3-r2': symbol('S', blue),
    'lh-c3-r3': symbol('C', blue),

    'lh-c4-r0': symbol('\'', orange),
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

const layer2BNav: Record<string, string> = {
  'lh-c1-r1': 'Home',
  'lh-c2-r1': 'PgUp',
  'lh-c3-r1': 'PgDn',
  'lh-c4-r1': 'End'
}

for (const [id, label] of Object.entries(layer2BNav)) {
  const key = midGardLayer2B[id]
  key.primary = label
  key.primarySize = 14
  key.primaryPlacement = 'center'
  key.primaryClassName = 'label-tight'
  key.ariaLabel = label
}

const forwardDelete = midGardLayer2B['rh-c2-r3']
forwardDelete.primary = '⌦'
forwardDelete.ariaLabel = 'forward delete'

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

const layer2BFunctions: Record<string, string> = {
  'lh-c0-r1': 'F1',
  'lh-c1-r0': 'F2',
  'lh-c2-r0': 'F3',
  'lh-c3-r0': 'F4',
  'lh-c4-r0': 'F5',
  'lh-c5-r0': 'F6',
  'rh-c5-r0': 'F7',
  'rh-c4-r0': 'F8',
  'rh-c3-r0': 'F9',
  'rh-c2-r0': 'F10',
  'rh-c1-r0': 'F11',
  'rh-c0-r1': 'F12'
}

for (const [id, label] of Object.entries(layer2BFunctions)) {
  const key = midGardLayer2B[id]
  key.primary = label
  key.primaryPlacement = 'center'
  key.primaryClassName = 'key-home key-fit'
  key.className = 'key-purple'
  key.ariaLabel = label
  delete key.secondary
}

const layer1BFunctions: Record<string, string> = {
  'lh-c1-r0': 'F13',
  'lh-c2-r0': 'F14',
  'lh-c3-r0': 'F15',
  'lh-c4-r0': 'F16',
  'lh-c5-r0': 'F17',
  'rh-c5-r0': 'F18',
  'rh-c4-r0': 'F19'
}

for (const [id, label] of Object.entries(layer1BFunctions)) {
  const key = midGardLayer1B[id]
  key.primary = label
  key.primaryPlacement = 'center'
  key.primaryClassName = 'key-home key-fit'
  key.className = 'key-purple'
  key.ariaLabel = label
  delete key.secondary
}

const layer2BShortcuts: Record<string, { letter: string, action: string }> = {
  'lh-c2-r3': { letter: 'X', action: 'Cut' },
  'lh-c3-r3': { letter: 'C', action: 'Copy' },
  'lh-c4-r3': { letter: 'V', action: 'Paste' }
}

for (const [id, shortcut] of Object.entries(layer2BShortcuts)) {
  const key = midGardLayer2B[id]
  key.primary = shortcut.letter
  key.primaryPlacement = 'bottom'
  key.primarySize = 22
  delete key.primaryClassName
  key.secondary = [{ text: '⌘', placement: 'top', size: 15 }]
  key.className = 'key-blue key-shortcut'
  key.ariaLabel = `Command ${shortcut.letter}, ${shortcut.action}`
  key.note = shortcut.action
}

const optionBackspace = midGardLayer2B['rh-c4-r2']
optionBackspace.primary = '⌫'
optionBackspace.primaryPlacement = 'bottom'
optionBackspace.primarySize = 22
delete optionBackspace.primaryClassName
optionBackspace.secondary = [{ text: '⌥', placement: 'top', size: 15 }]
optionBackspace.className = 'key-blue key-shortcut'
optionBackspace.ariaLabel = 'Option Backspace, delete previous word'
optionBackspace.note = 'Delete previous word'

const commandBackspace = midGardLayer2B['rh-c4-r1']
commandBackspace.primary = '⌫'
commandBackspace.primaryPlacement = 'bottom'
commandBackspace.primarySize = 22
delete commandBackspace.primaryClassName
commandBackspace.secondary = [{ text: '⌘', placement: 'top', size: 15 }]
commandBackspace.className = 'key-blue key-shortcut'
commandBackspace.ariaLabel = 'Command Backspace, delete to start of line'
commandBackspace.note = 'Delete to start of line'

const optionForwardDelete = midGardLayer2B['rh-c3-r3']
optionForwardDelete.primary = '⌦'
optionForwardDelete.primaryPlacement = 'bottom'
optionForwardDelete.primarySize = 22
delete optionForwardDelete.primaryClassName
optionForwardDelete.secondary = [{ text: '⌥', placement: 'top', size: 15 }]
optionForwardDelete.className = 'key-blue key-shortcut'
optionForwardDelete.ariaLabel = 'Option Forward Delete, delete next word'
optionForwardDelete.note = 'Delete next word'

const layer2BSwedish: Record<string, string> = {
  'rh-c3-r1': 'Å',
  'rh-c2-r1': 'Ä',
  'rh-c1-r1': 'Ö',
  'rh-c3-r2': 'å',
  'rh-c2-r2': 'ä',
  'rh-c1-r2': 'ö'
}

for (const [id, letter] of Object.entries(layer2BSwedish)) {
  const key = midGardLayer2B[id]
  key.primary = letter
  key.primaryPlacement = 'center'
  key.primarySize = 18
  key.primaryClassName = 'key-home'
  key.className = 'key-green'
  key.ariaLabel = letter
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
