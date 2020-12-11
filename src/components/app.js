import { Fragment, h } from 'preact'
import { useContext, useState } from 'preact/hooks'
import { random } from '../util/math'
import { AppContext } from './AppContext'
import BingoCard from './BingoCard'
import OptionsDialog from './OptionsDialog'

// TODO: Print options w/ and w/o images
// TODO: Investigate caching images as base64 strings
// TODO: Mobile
// TODO: Bingo detection (count total bingos)
// TODO: Maybe look into PWA-ifying
// TODO: Use browser language/user selected for names (villager data has multiple, use navigator.languages)
// TODO: Show loading while villagers/preferences load
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
  const { selectedTarget, exclusions, allVillagers } = useContext(AppContext)
  const [showCard, setShowCard] = useState(false)
  const [villagers, setVillagers] = useState(null)
  const [optionsOpen, setOptionsOpen] = useState(false)

  return (
    <Fragment>
      <div className="sidebar">
        <p>Instructions here blah blah blah</p>
        <div className="controls">
          <button type="button" onClick={() => setOptionsOpen(true)}>
            Options
          </button>
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
      <OptionsDialog isOpen={optionsOpen} handleClose={() => setOptionsOpen(false)} />
    </Fragment>
  )
}
