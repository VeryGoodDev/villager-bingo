import { Fragment, h } from 'preact'
import { useEffect, useRef } from 'preact/hooks'
import Portal from '../Portal'
import useEscapeHandler from '../useEscapeHandler'
import './css/overlay.styl'
import useFocusLock from './useFocusLock'

// TODO: Animate open/close?

export default function Overlay({ children, isOpen, handleClose }) {
  const overlayRef = useRef(null)
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
  useEscapeHandler({
    enabled: isOpen,
    handler: handleClose,
  })
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
