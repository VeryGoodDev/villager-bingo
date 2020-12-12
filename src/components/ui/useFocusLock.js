// FIXME: Make this actually work as a hook (useEffect for enabled, container, etc)
// Adapted from https://uxdesign.cc/how-to-trap-focus-inside-modal-to-make-it-ada-compliant-6a50f9a70700
export default function useFocusLock({ enabled, container }) {
  if (!enabled || !container) return
  const focusableSelectors = `button, [href], input, select, textarea, [tabindex]:not([tabindex="-1])`
  const focusables = container.querySelectorAll(focusableSelectors)
  const firstFocusableEl = focusables[0]
  const lastFocusableEl = focusables[focusables.length - 1]
  const handleKeydown = evt => {
    if (evt.key !== `Tab`) return
    if (evt.shiftKey) {
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus()
        evt.preventDefault()
      } else if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus()
        evt.preventDefault()
      }
    }
  }
  window.addEventListener(`keydown`, handleKeydown)
}
