import { Fragment, h } from 'preact'
import { useState } from 'preact/hooks'
// import '../assets/css/styles.css'
import { random } from '../util/math'
import BingoCard from './BingoCard'
import useVillagers from './useVillagers'

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
  const allVillagers = useVillagers()
  const villagers = getRandomVillagers(allVillagers)
  return (
    <Fragment>
      <div className="sidebar">
        <p>Instructions here blah blah blah</p>
        <div className="controls">
          <button type="button" onClick={() => setShowCard(true)}>
            Generate Card
          </button>
        </div>
      </div>
      {!showCard ? null : <BingoCard villagers={villagers} />}
    </Fragment>
  )
}
