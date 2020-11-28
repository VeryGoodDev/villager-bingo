import { Fragment, h } from 'preact'
import { useState } from 'preact/hooks'
import '../assets/css/villager-combobox.styl'
import { random } from '../util/math'
import BingoCard from './BingoCard'
import useVillagers from './useVillagers'
import VillagerCombobox from './VillagerCombobox'

// TODO: Use indexedDB for caching villager data
// TODO: General styling
// TODO: Print options w/ and w/o images
// TODO: Investigate caching images as base64 strings
// TODO: Mobile
// TODO: Set free square and exclusions
// TODO: Bingo detection (count total bingos)
// TODO: Maybe look into PWA-ifying
// TODO: Use browser language/user selected for names (villager data has multiple, use navigator.languages)

function getRandomVillagers(villagers, { target, exclusions = [] } = {}) {
  if (!villagers) return villagers
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
  const allVillagers = useVillagers()
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
          />
          <VillagerCombobox
            multiSelect
            placeholder="Type villager name(s)"
            id="excludeVillagers"
            labelText="Exclude Villager(s)"
            onSelect={villager => {
              // FIXME: Exclusions should never prevent a full 25 villager card from generating
              if (exclusions.includes(villager)) {
                setExclusions(exclusions.filter(v => v !== villager))
              } else {
                setExclusions([...exclusions, villager])
              }
            }}
            onDeselect={villager => {
              setExclusions(exclusions.filter(v => v !== villager))
            }}
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
        </div>
      </div>
      {!showCard ? null : <BingoCard villagers={villagers} />}
    </Fragment>
  )
}
