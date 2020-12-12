import { h } from 'preact'
import Portal from '../Portal'
import './css/overlay.styl'

export default function Overlay({ children, isOpen, handleClose }) {
  if (!isOpen) return null
  return (
    <Portal>
      <div className="scrim" />
      <div className="overlay">
        <div className="overlay-contents">{children}</div>
        <button type="button" className="close-btn" onClick={handleClose} aria-label="Close dialog">
          <span aria-hidden>✖</span>
        </button>
      </div>
    </Portal>
  )
}
