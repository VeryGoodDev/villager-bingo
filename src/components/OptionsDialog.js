import { h } from 'preact'
import '../assets/css/options-dialog.styl'
import Portal from './Portal'

// TODO: Make some state global with Context to use here
// TODO: Extract generic Overlay for reuse
// TODO: Target villager select in here
// TODO: Exclude villager select in here
// TODO: Clear cache option
// TODO: Turn off cache option
// TODO: Language selector (default to navigator.languages, then en-US)
// TODO: Save preferences in localStorage
// TODO: Animate open/close?

export default function OptionsDialog({ isOpen }) {
  if (!isOpen) return null
  return (
    <Portal>
      <div className="scrim" />
      <div className="overlay">
        <div className="overlay-contents">
          <span>Options</span>
        </div>
      </div>
    </Portal>
  )
}
