import { h } from 'preact'
import { useContext } from 'preact/hooks'
import '../assets/css/options-dialog.styl'
import { AppContext } from './AppContext'
import Portal from './Portal'
import VillagerCombobox from './VillagerCombobox'

// TODO: Extract generic Overlay for reuse
// TODO: Language selector (default to navigator.languages, then en-US)
// TODO: Animate open/close?
// TODO: Lock body scroll when open
// TODO: Close on escape (but not when VillagerCombobox is open)
// TODO: Trap focus

function Checkbox({ id, labelText, checked, onChange }) {
  return (
    <div className="checkbox-wrapper">
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{labelText}</label>
    </div>
  )
}

export default function OptionsDialog({ isOpen, handleClose }) {
  const {
    selectedTarget,
    setSelectedTarget,
    exclusions,
    setExclusions,
    exclusionMax,
    shouldUseCache,
    setShouldUseCache,
  } = useContext(AppContext)
  if (!isOpen) return null
  return (
    <Portal>
      <div className="scrim" />
      <div className="overlay">
        <div className="overlay-contents">
          <div className="options-dialog-wrapper">
            <span>Options</span>
            <VillagerCombobox
              placeholder="Type villager's name"
              id="targetVillager"
              labelText="Target Villager (Free Space)"
              onSelect={villager => setSelectedTarget(villager)}
              onDeselect={() => {
                setSelectedTarget(null)
              }}
              filter={villager => !exclusions.find(v => v.id === villager.id)}
            />
            <VillagerCombobox
              multiSelect
              placeholder="Type villager name(s)"
              id="excludeVillagers"
              labelText="Exclude Villager(s)"
              onSelect={villager => {
                if (exclusions.includes(villager)) {
                  setExclusions(exclusions.filter(v => v !== villager))
                } else {
                  setExclusions([...exclusions, villager])
                }
              }}
              onDeselect={villager => {
                setExclusions(exclusions.filter(v => v !== villager))
              }}
              onClearAll={() => setExclusions([])}
              disabled={exclusions.length === exclusionMax}
              filter={villager => (selectedTarget ? selectedTarget.id !== villager.id : true)}
            />
            <div className="cache-wrapper">
              <Checkbox
                labelText="Cache Data"
                id="cacheDataCheckbox"
                checked={shouldUseCache}
                onChange={() => setShouldUseCache(prev => !prev)}
              />
              {shouldUseCache ? (
                <button
                  type="button"
                  onClick={evt => {
                    indexedDB.deleteDatabase(`bingo`)
                    evt.target.disabled = true
                  }}
                >
                  Clear Cache
                </button>
              ) : null}
            </div>
          </div>
          <button type="button" className="close-btn" onClick={handleClose} aria-label="Close dialog">
            <span aria-hidden>✖</span>
          </button>
        </div>
      </div>
    </Portal>
  )
}
