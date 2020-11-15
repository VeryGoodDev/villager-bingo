import { Fragment, h } from 'preact'
import { useState } from 'preact/hooks'
// import '../assets/css/styles.css'
import { random } from '../util/math'
import BingoCard from './BingoCard'
import useVillagers from './useVillagers'

// TODO: Use indexedDB for caching villager data
// TODO: General styling
// TODO: Print options w/ and w/o images
// TODO: Investigate caching images as base64 strings
// TODO: Mobile
// TODO: Set free square and exclusions
// TODO: Bingo detection (count total bingos)
// TODO: Maybe look into PWA-ifying
// TODO: Use browser language/user selected for names (villager data has multiple, use navigator.languages)

function getRandomVillagers(villagers) {
  if (!villagers) return villagers
  const indexes = new Set()
  while (indexes.size < 25) {
    indexes.add(random(0, villagers.length))
  }
  return [...indexes].map(idx => villagers[idx])
}
export default function App() {
  const [showCard, setShowCard] = useState(false)
  const [villagers, setVillagers] = useState(null)
  const allVillagers = useVillagers()
  return (
    <Fragment>
      <div className="sidebar">
        <p>Instructions here blah blah blah</p>
        <div className="controls">
          <button
            type="button"
            disabled={!allVillagers?.length}
            onClick={() => {
              setVillagers(getRandomVillagers(allVillagers))
              setShowCard(true)
            }}
          >
            Generate Card
          </button>
        </div>
      </div>
      {!showCard ? null : <BingoCard villagers={villagers} />}
    </Fragment>
  )
}
