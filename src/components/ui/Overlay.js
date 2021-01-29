import { Fragment, h } from 'preact'
import { useCallback, useEffect, useRef } from 'preact/hooks'
import Portal from '../Portal'
import './css/overlay.styl'
import useFocusLock from './useFocusLock'

// TODO: Animate open/close?
// TODO: Close on escape (but not when VillagerCombobox is open)

export default function Overlay({ children, isOpen, handleClose }) {
  const overlayRef = useRef(null)
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
    return () => {
      window.removeEventListener(`keydown`, handleEscape)
    }
  }, [isOpen, handleEscape])
  // Trap focus in the overlay when it's open
  useFocusLock({
    enabled: isOpen,
    containerRef: overlayRef,
    shouldAutofocus: true,
  })
  return (
    <Portal>
      {/* I hate it, but this was the only way I could get the ref (which is needed for autofocus and focus lock) to consistently not be null when the overlay is open */}
      <div ref={overlayRef}>
        {isOpen ? (
          <Fragment>
            <div className="scrim" />
            <div className="overlay">
              <div className="overlay-contents">{children}</div>
              <button type="button" className="close-btn" onClick={handleClose} aria-label="Close dialog">
                <span aria-hidden>✖</span>
              </button>
            </div>
          </Fragment>
        ) : null}
      </div>
    </Portal>
  )
}
