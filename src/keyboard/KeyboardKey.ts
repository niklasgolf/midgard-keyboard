export type LabelPlacement = 'top' | 'center' | 'bottom'

export type KeyLabel = {
  text: string
  placement: LabelPlacement
  size: number
  className?: string
  offsetY?: number
}

export type KeyVariant = 'accent'

export type KeyGeometry = {
  id: string
  x: number
  y: number
  width: number
  height: number
  rotation: number
}

export type KeyAssignment = {
  primary: string
  primarySize?: number
  primaryPlacement?: LabelPlacement
  primaryClassName?: string
  secondary?: KeyLabel[]
  variant?: KeyVariant
  className?: string
  ariaLabel?: string
  note?: string
}

export type KeyboardKeyData = KeyGeometry & KeyAssignment

export type CenterControlData = {
  id: string
  x: number
  y: number
  size: number
  label: string
  badge: string
  kind: 'scroll' | 'move'
  needle: number
}

export type KeyboardTitle = {
  kicker: string
  layer: string
}

export type KeyboardLayout = {
  id: string
  width: number
  height: number
  keys: KeyboardKeyData[]
  controls: CenterControlData[]
  title: KeyboardTitle
}
