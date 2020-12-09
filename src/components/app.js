import { Fragment, h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import '../assets/css/villager-combobox.styl'
import { random } from '../util/math'
import BingoCard from './BingoCard'
import useVillagers from './useVillagers'
import { VillagerCombobox } from './VillagerCombobox'

// TODO: Print options w/ and w/o images
// TODO: Investigate caching images as base64 strings
// TODO: Mobile
// TODO: Bingo detection (count total bingos)
// TODO: Maybe look into PWA-ifying
// TODO: Use browser language/user selected for names (villager data has multiple, use navigator.languages)
// TODO: Break out target, exclude, language, clear cache, etc. into options menu
// TODO: Show loading while villagers load
// TODO: Support multiple bingo cards
// TODO: Look into combining focus/blur inside VillagerCombobox custom Input for proper blur handling
// TODO: Screen reader a11y for VillagerCombobox
// TODO: Issues/feedback popup from footer

function getRandomVillagers(villagers, { target, exclusions = [] } = {}) {
  if (!villagers?.length) return villagers
  const max = target ? 24 : 25
  const indexSet = new Set()
  const targetIndex = villagers.findIndex(v => v.id === target?.id)
  const excludedIndexes = exclusions.map(villager => villagers.findIndex(v => v.id === villager.id))
  if (target) excludedIndexes.push(targetIndex)
  while (indexSet.size < max) {
    let newIndex
    do {
      newIndex = random(0, villagers.length)
    } while (excludedIndexes.includes(newIndex))
    indexSet.add(newIndex)
  }
  const indexes = [...indexSet]
  if (target) indexes.splice(12, 0, targetIndex)
  return indexes.map(idx => villagers[idx])
}
export default function App() {
  const [showCard, setShowCard] = useState(false)
  const [villagers, setVillagers] = useState(null)
  const [selectedTarget, setSelectedTarget] = useState(null)
  const [exclusions, setExclusions] = useState([])
  const [exclusionMax, setExclusionMax] = useState(0)
  const allVillagers = useVillagers()
  const villagerCount = allVillagers?.length ?? 0
  useEffect(() => {
    setExclusionMax(villagerCount - 25)
  }, [villagerCount])
  return (
    <Fragment>
      <div className="sidebar">
        <p>Instructions here blah blah blah</p>
        <div className="controls">
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
          <button
            type="button"
            className="cta-btn"
            disabled={!allVillagers?.length}
            onClick={() => {
              setVillagers(
                getRandomVillagers(allVillagers, {
                  target: selectedTarget,
                  exclusions,
                })
              )
              setShowCard(true)
            }}
          >
            Generate New Card
          </button>
          <button
            type="button"
            className="cta-btn"
            onClick={evt => {
              indexedDB.deleteDatabase(`bingo`)
              evt.target.disabled = true
            }}
          >
            Clear Cache
          </button>
        </div>
      </div>
      {!showCard ? null : <BingoCard villagers={villagers} />}
      <footer>
        <div>
          &copy; {new Date().getFullYear()}
          {` `}
          <a href="https://twitter.com/_verygooddev" target="_blank" rel="noreferrer noopener">
            VeryGoodDev
          </a>
        </div>
        <div>
          Villager data provided by{` `}
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a href="https://acnhapi.com/" target="_blank" rel="noopener">
            ACNH API
          </a>
        </div>
      </footer>
    </Fragment>
  )
}
