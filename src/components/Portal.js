import { createPortal } from 'preact/compat'

export default function Portal({ children }) {
  let element = document.querySelector(`[data-portal]`)
  if (!element) {
    element = document.createElement(`div`)
    element.setAttribute(`data-portal`, ``)
    document.body.appendChild(element)
  }
  return createPortal(children, element)
}
