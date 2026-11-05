import type {
  CenterControlData,
  KeyAssignment,
  KeyGeometry,
  KeyboardLayout,
  KeyboardTitle,
  KeyLabel
} from './KeyboardKey.ts'

const KEY = 65

function cap(id: string, x: number, y: number, rotation = 0): KeyGeometry {
  return { id, x, y, width: KEY, height: KEY, rotation }
}

function pair(shifted: string, base: string): KeyAssignment {
  return {
    primary: base,
    primarySize: 16,
    primaryPlacement: 'bottom',
    secondary: [{ text: shifted, placement: 'top', size: 13 }],
    ariaLabel: `${shifted} ${base}`
  }
}

function letter(text: string): KeyAssignment {
  return {
    primary: text,
    primarySize: 18,
    primaryPlacement: 'center',
    ariaLabel: text
  }
}

function named(text: string, size: number, ariaLabel = text): KeyAssignment {
  return {
    primary: text,
    primarySize: size,
    primaryPlacement: 'center',
    ariaLabel
  }
}

function legend(text: string, size: number, ariaLabel: string): KeyAssignment {
  return {
    primary: text,
    primarySize: size,
    primaryPlacement: 'center',
    ariaLabel
  }
}

function layerKey(name: string, size: number, primaryClassName?: string): KeyAssignment {
  const secondary: KeyLabel[] = [
    { text: 'Layer Key', placement: 'top', size: 8, className: 'label-layers' }
  ]
  return {
    primary: name,
    primarySize: size,
    primaryPlacement: 'bottom',
    primaryClassName,
    secondary,
    variant: 'accent',
    ariaLabel: `Layer Key ${name}`
  }
}

// Positions are the MoErgo Go60 editor coordinate system:
// 65px caps, 5px gaps, rotation around the top-left corner.
export const go60Geometry: KeyGeometry[] = [
  cap('lh-c0-r0', 0, 35),
  cap('lh-c1-r0', 70, 35),
  cap('lh-c2-r0', 140, 0),
  cap('lh-c3-r0', 210, 0),
  cap('lh-c4-r0', 280, 0),
  cap('lh-c5-r0', 350, 0),
  cap('rh-c5-r0', 805, 0),
  cap('rh-c4-r0', 875, 0),
  cap('rh-c3-r0', 945, 0),
  cap('rh-c2-r0', 1015, 0),
  cap('rh-c1-r0', 1085, 35),
  cap('rh-c0-r0', 1155, 35),

  cap('lh-c0-r1', 0, 105),
  cap('lh-c1-r1', 70, 105),
  cap('lh-c2-r1', 140, 70),
  cap('lh-c3-r1', 210, 70),
  cap('lh-c4-r1', 280, 70),
  cap('lh-c5-r1', 350, 70),
  cap('rh-c5-r1', 805, 70),
  cap('rh-c4-r1', 875, 70),
  cap('rh-c3-r1', 945, 70),
  cap('rh-c2-r1', 1015, 70),
  cap('rh-c1-r1', 1085, 105),
  cap('rh-c0-r1', 1155, 105),

  cap('lh-c0-r2', 0, 175),
  cap('lh-c1-r2', 70, 175),
  cap('lh-c2-r2', 140, 140),
  cap('lh-c3-r2', 210, 140),
  cap('lh-c4-r2', 280, 140),
  cap('lh-c5-r2', 350, 140),
  cap('rh-c5-r2', 805, 140),
  cap('rh-c4-r2', 875, 140),
  cap('rh-c3-r2', 945, 140),
  cap('rh-c2-r2', 1015, 140),
  cap('rh-c1-r2', 1085, 175),
  cap('rh-c0-r2', 1155, 175),

  cap('lh-c0-r3', 0, 245),
  cap('lh-c1-r3', 70, 245),
  cap('lh-c2-r3', 140, 210),
  cap('lh-c3-r3', 210, 210),
  cap('lh-c4-r3', 280, 210),
  cap('lh-c5-r3', 350, 210),
  cap('rh-c5-r3', 805, 210),
  cap('rh-c4-r3', 875, 210),
  cap('rh-c3-r3', 945, 210),
  cap('rh-c2-r3', 1015, 210),
  cap('rh-c1-r3', 1085, 245),
  cap('rh-c0-r3', 1155, 245),

  cap('lh-c2-r4', 140, 280),
  cap('lh-c3-r4', 210, 280),
  cap('lh-c4-r4', 280, 280),
  cap('rh-c4-r4', 875, 280),
  cap('rh-c3-r4', 945, 280),
  cap('rh-c2-r4', 1015, 280),

  cap('lh-thumb-layer', 364, 287, 12.5),
  cap('lh-thumb-shift', 448, 308, 25),
  cap('lh-thumb-ctrl', 525, 346.5, 37),
  cap('rh-thumb-alt', 640.5, 385, -37),
  cap('rh-thumb-space', 710.5, 336, -25),
  cap('rh-thumb-mod', 791, 301, -12.5)
]

export const go60FactoryAssignment: Record<string, KeyAssignment> = {
  'lh-c0-r0': pair('+', '='),
  'lh-c1-r0': pair('!', '1'),
  'lh-c2-r0': pair('@', '2'),
  'lh-c3-r0': pair('#', '3'),
  'lh-c4-r0': pair('$', '4'),
  'lh-c5-r0': pair('%', '5'),
  'rh-c5-r0': pair('^', '6'),
  'rh-c4-r0': pair('&', '7'),
  'rh-c3-r0': pair('*', '8'),
  'rh-c2-r0': pair('(', '9'),
  'rh-c1-r0': pair(')', '0'),
  'rh-c0-r0': pair('_', '-'),

  'lh-c0-r1': legend('⇥', 22, 'Tab'),
  'lh-c1-r1': letter('Q'),
  'lh-c2-r1': letter('W'),
  'lh-c3-r1': letter('E'),
  'lh-c4-r1': letter('R'),
  'lh-c5-r1': letter('T'),
  'rh-c5-r1': letter('Y'),
  'rh-c4-r1': letter('U'),
  'rh-c3-r1': letter('I'),
  'rh-c2-r1': letter('O'),
  'rh-c1-r1': letter('P'),
  'rh-c0-r1': pair('|', '\\'),

  'lh-c0-r2': named('Esc', 15),
  'lh-c1-r2': letter('A'),
  'lh-c2-r2': letter('S'),
  'lh-c3-r2': letter('D'),
  'lh-c4-r2': letter('F'),
  'lh-c5-r2': letter('G'),
  'rh-c5-r2': letter('H'),
  'rh-c4-r2': letter('J'),
  'rh-c3-r2': letter('K'),
  'rh-c2-r2': letter('L'),
  'rh-c1-r2': pair(':', ';'),
  'rh-c0-r2': pair('"', "'"),

  'lh-c0-r3': {
    primary: 'Magic',
    primarySize: 15,
    primaryPlacement: 'center',
    variant: 'accent',
    ariaLabel: 'Magic'
  },
  'lh-c1-r3': letter('Z'),
  'lh-c2-r3': letter('X'),
  'lh-c3-r3': letter('C'),
  'lh-c4-r3': letter('V'),
  'lh-c5-r3': letter('B'),
  'rh-c5-r3': letter('N'),
  'rh-c4-r3': letter('M'),
  'rh-c3-r3': pair('<', ','),
  'rh-c2-r3': pair('>', '.'),
  'rh-c1-r3': pair('?', '/'),
  'rh-c0-r3': layerKey('Keypad', 12),

  'lh-c2-r4': pair('~', '`'),
  'lh-c3-r4': named('Delete', 13),
  'lh-c4-r4': legend('⌫', 22, 'Backspace'),
  'rh-c4-r4': legend('⌘', 22, 'Left Command'),
  'rh-c3-r4': pair('{', '['),
  'rh-c2-r4': pair('}', ']'),

  'lh-thumb-layer': layerKey('SymbolNav', 10, 'label-tight'),
  'lh-thumb-shift': {
    primary: '',
    className: 'has-home',
    ariaLabel: 'Left Shift',
    note: 'Editor draws a house icon on this key. Binding is Left Shift (LSHIFT). Glyph kept as displayed.'
  },
  'lh-thumb-ctrl': legend('⌃', 22, 'Left Control'),
  'rh-thumb-alt': legend('⌥', 22, 'Left Option'),
  'rh-thumb-space': named('Space', 14),
  'rh-thumb-mod': {
    primary: '⏎',
    primarySize: 18,
    primaryPlacement: 'bottom',
    secondary: [
      { text: 'Mod Tap', placement: 'top', size: 9, className: 'label-legend' },
      { text: '⌥', placement: 'center', size: 13, offsetY: 2 }
    ],
    variant: 'accent',
    ariaLabel: 'Mod Tap, hold Right Option, tap Enter'
  }
}

export const go60Controls: CenterControlData[] = [
  {
    id: 'scroll',
    x: 441,
    y: 154,
    size: 135,
    label: 'scroll',
    badge: '1',
    kind: 'scroll',
    needle: -7.2
  },
  {
    id: 'move',
    x: 644,
    y: 154,
    size: 135,
    label: 'move',
    badge: '1',
    kind: 'move',
    needle: 61.2
  }
]

export function createGo60Layout(
  id: string,
  assignment: Record<string, KeyAssignment>,
  title: KeyboardTitle
): KeyboardLayout {
  const keys = go60Geometry.map((item) => {
    const legendForKey = assignment[item.id]
    if (!legendForKey) {
      throw new Error(`Missing key assignment: ${item.id}`)
    }
    return { ...item, ...legendForKey }
  })

  return {
    id,
    width: 1220,
    height: 450,
    keys,
    controls: go60Controls,
    title
  }
}

export const go60FactoryLayout: KeyboardLayout = createGo60Layout(
  'go60-factory',
  go60FactoryAssignment,
  { kicker: 'Go60 midGard Layout', layer: 'Factory Default' }
)
