import { h } from 'preact'
import { useContext } from 'preact/hooks'
import '../assets/css/options-dialog.styl'
import { AppContext } from './AppContext'
import Checkbox from './ui/Checkbox'
import Overlay from './ui/Overlay'
import VillagerCombobox from './VillagerCombobox'

// TODO: Language selector (default to navigator.languages, then en-US)

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
  return (
    <Overlay isOpen={isOpen} handleClose={handleClose}>
      <div className="options-dialog-wrapper">
        <span>Options</span>
        <VillagerCombobox
          placeholder="Type villager's name"
          id="targetVillager"
          labelText="Target Villager (Free Space)"
          onSelect={(villager) => setSelectedTarget(villager)}
          onDeselect={() => {
            setSelectedTarget(null)
          }}
          filter={(villager) => !exclusions.find((v) => v.id === villager.id)}
        />
        <VillagerCombobox
          multiSelect
          placeholder="Type villager name(s)"
          id="excludeVillagers"
          labelText="Exclude Villager(s)"
          onSelect={(villager) => {
            if (exclusions.includes(villager)) {
              setExclusions(exclusions.filter((v) => v !== villager))
            } else {
              setExclusions([...exclusions, villager])
            }
          }}
          onDeselect={(villager) => {
            setExclusions(exclusions.filter((v) => v !== villager))
          }}
          onClearAll={() => setExclusions([])}
          disabled={exclusions.length === exclusionMax}
          filter={(villager) => (selectedTarget ? selectedTarget.id !== villager.id : true)}
        />
        <div className="cache-wrapper">
          <Checkbox
            labelText="Cache Data"
            id="cacheDataCheckbox"
            checked={shouldUseCache}
            onChange={() => setShouldUseCache((prev) => !prev)}
          />
          {shouldUseCache ? (
            <button
              type="button"
              onClick={() => {
                indexedDB.deleteDatabase(`bingo`)
              }}
            >
              Clear Cache
            </button>
          ) : null}
        </div>
      </div>
    </Overlay>
  )
}
