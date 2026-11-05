import './style.css'
import { createKeyboardPanel } from './keyboard/Keyboard.ts'
import { midgardBoards } from './keyboard/midgardLayers.ts'

const app = document.querySelector<HTMLDivElement>('#app')
if (!app) {
  throw new Error('Missing #app root')
}

app.replaceChildren(createShell())

function createShell(): HTMLElement {
  const shell = document.createElement('div')
  shell.className = 'shell'
  shell.append(createHeader(), createStage())
  return shell
}

function createHeader(): HTMLElement {
  const header = document.createElement('header')
  header.className = 'masthead'

  const identity = document.createElement('div')
  identity.className = 'masthead-id'

  const sigil = document.createElement('span')
  sigil.className = 'sigil'
  sigil.setAttribute('aria-hidden', 'true')

  const titles = document.createElement('div')
  titles.className = 'masthead-titles'
  const title = document.createElement('h1')
  title.textContent = 'midGard'
  const subtitle = document.createElement('p')
  subtitle.textContent = 'KEYBOARD SYSTEM'
  titles.append(title, subtitle)
  identity.append(sigil, titles)

  const status = document.createElement('div')
  status.className = 'masthead-status'

  const dot = document.createElement('span')
  dot.className = 'status-dot'
  dot.setAttribute('aria-hidden', 'true')

  const revision = document.createElement('span')
  revision.className = 'rev'
  revision.textContent = 'REV 1.0'

  const separator = document.createElement('span')
  separator.className = 'status-sep'
  separator.setAttribute('aria-hidden', 'true')

  const model = document.createElement('span')
  model.className = 'model'
  model.textContent = 'GO60'

  status.append(dot, revision, separator, model)
  header.append(identity, status)
  return header
}

function createStage(): HTMLElement {
  const stage = document.createElement('main')
  stage.className = 'stage'

  const grid = document.createElement('div')
  grid.className = 'board-grid'

  for (const board of midgardBoards) {
    grid.append(createKeyboardPanel(board.title, board.layout))
  }

  stage.append(grid)
  return stage
}
