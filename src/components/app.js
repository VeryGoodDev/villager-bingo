import { Fragment, h } from 'preact'
import { useContext, useState } from 'preact/hooks'
import { random } from '../util/math'
import { AppContext } from './AppContext'
import BingoCard from './BingoCard'
import Instructions from './Instructions'
import OptionsDialog from './OptionsDialog'

// TODO: Add option to disable images
// TODO: Investigate caching images as base64 strings
// TODO: Mobile
// TODO: Bingo detection (count total bingos)
// TODO: Maybe look into PWA-ifying
// TODO: Use browser language/user selected for names (villager data has multiple, use navigator.languages)
// TODO: Show loading while villagers/preferences load
// TODO: Support multiple bingo cards
// TODO: Check screen reader a11y for VillagerCombobox
// TODO: Issues/feedback popup from footer
// TODO: Full a11y audit
// TODO: Generate new card should clear previously marked squares

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
        <Instructions />
        <div className="controls">
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
            className="options-btn"
            onClick={() => setOptionsOpen(true)}
            aria-label="Open options menu"
          >
            <svg aria-hidden xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
              <path fill="none" d="M0 0h256v256H0z" />
              <circle
                cx="128"
                cy="128"
                r="56"
                fill="none"
                stroke="var(--acnh-color-yellow)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <path
                d="M55.8 179l-1.2 18.5a8.1 8.1 0 002.5 6.4 100.6 100.6 0 0040.6 23.5 8.1 8.1 0 006.8-1L120 216h16l15.5 10.3a8.1 8.1 0 006.8 1.1 100.6 100.6 0 0040.6-23.5 8.1 8.1 0 002.5-6.4l-1.2-18.6 8-13.8 16.7-8.3a8.1 8.1 0 004.3-5.3 100.6 100.6 0 000-47 8.1 8.1 0 00-4.3-5.3l-16.7-8.3-8-13.8 1.2-18.6a8.1 8.1 0 00-2.5-6.4 100.6 100.6 0 00-40.6-23.5 8.1 8.1 0 00-6.8 1L136 40h-16l-15.5-10.3a8.1 8.1 0 00-6.8-1A100.6 100.6 0 0057.1 52a8.1 8.1 0 00-2.5 6.4l1.2 18.6-8 13.8L31 99.2a8.1 8.1 0 00-4.3 5.3 100.6 100.6 0 000 47 8.1 8.1 0 004.3 5.3l16.7 8.3z"
                fill="none"
                stroke="var(--acnh-color-yellow)"
                strokeMiterlimit="10"
                strokeWidth="16"
              />
            </svg>
          </button>
        </div>
      </div>
      <main>{!showCard ? null : <BingoCard villagers={villagers} />}</main>
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
