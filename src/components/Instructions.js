import { h } from 'preact'
import { useState } from 'preact/hooks'
import '../assets/css/instructions.styl'
import Details from './ui/Details'
import Spacer from './ui/Spacer'

export default function Instructions() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Details
      defaultOpen={false}
      summaryContent="Instructions"
      onToggle={newValue => {
        setIsOpen(newValue)
      }}
      style={{
        maxWidth: 450,
        width: isOpen ? `100%` : `calc(100vw - 2em)`,
      }}
    >
      <div className="instructions-wrapper">
        <p>
          Built for use when you or a friend, streamer, etc. are villager hunting. You can click the Generate New Card
          button below immediately if you want, or click the gear icon next to it to set some options.
        </p>
        <Spacer axis="vertical" size={12} />
        <b>Available Options</b>
        <Spacer axis="vertical" size={12} />
        <ul className="options-list">
          <li>
            <b>Target Villager</b>
            <p>
              This can be used to mark the villager the one hunting is hoping to find. If selected, this villager will
              be used as the free space in the center.
            </p>
          </li>
          <li>
            <b>Exclude Villager(s)</b>
            <p>
              Any villagers selected from this list will be excluded from the bingo card generation. This is useful to
              make sure you don't have a card with villagers who are already on the island of the person doing the
              hunting.
            </p>
          </li>
          <li>
            <b>Cache Data</b>
            <p>
              This option allows you to decide whether or not the villager data should be cached on your device. This is
              on by default because{` `}
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a href="https://acnhapi.com/" target="_blank" rel="noopener">
                the API providing this data
              </a>
              {` `}
              is free and it seems kind to do our part to help keep the costs of running it low. If you have limited
              storage on your device, you are of course welcome to disable this option. Please note that this can only
              control the caching I am doing manually; when disabled, the API will be called each time you visit the
              page, but depending on your browser settings, your browser may or may not still be caching the response to
              that call.
            </p>
          </li>
          <li>
            <b>Clear Cache</b>
            <p>
              Clears out the cached villager data from your device. Please note that this only clears the cache I
              maintain with the code for the website, and will have no effect on any caching your browser has done.
            </p>
          </li>
        </ul>
      </div>
    </Details>
  )
}
