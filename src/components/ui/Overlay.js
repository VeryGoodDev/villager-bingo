import { h } from 'preact'
import { useCallback, useEffect, useRef } from 'preact/hooks'
import Portal from '../Portal'
import './css/overlay.styl'

// TODO: Animate open/close?
// TODO: Close on escape (but not when VillagerCombobox is open)
// TODO: Trap focus

export default function Overlay({ children, isOpen, handleClose }) {
  const overlayRef = useRef()
  const handleEscape = useCallback(
    evt => {
      if (evt.key === `Escape`) {
        window.removeEventListener(`keydown`, handleEscape)
        handleClose()
      }
    },
    [handleClose]
  )
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.height = `100vh`
      document.body.style.overflowY = `hidden`
    } else {
      document.body.style.height = ``
      document.body.style.overflowY = ``
    }
  }, [isOpen])
  // Close on escape
  // FIXME: Shouldn't close when escape is used to close villager combobox list
  useEffect(() => {
    if (isOpen) {
      window.addEventListener(`keydown`, handleEscape)
    }
  }, [isOpen, handleEscape])
  if (!isOpen) return null
  return (
    <Portal>
      <div className="scrim" />
      <div ref={overlayRef} className="overlay">
        <div className="overlay-contents">{children}</div>
        <button type="button" className="close-btn" onClick={handleClose} aria-label="Close dialog">
          <span aria-hidden>✖</span>
        </button>
      </div>
    </Portal>
  )
}
