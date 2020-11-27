import { Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover } from '@reach/combobox'
import '@reach/combobox/styles.css'
import { h } from 'preact'
import { useRef, useState } from 'preact/hooks'
import useVillagers from './useVillagers'

// FIXME: Placeholder, labels, etc. from props

export default function VillagerCombobox({ placeholder, id, labelText, onSelect = () => {} }) {
  const [inputText, setInputText] = useState(``)
  const inputRef = useRef()
  const allVillagers = useVillagers()
  return (
    <div>
      <label htmlFor={id}>
        <small>{labelText}</small>
      </label>
      <Combobox
        onSelect={item => {
          onSelect(allVillagers.find(villager => villager.id === item))
          // Combobox insists on setting the input text on select. I don't want it to do this. After looking in the Combobox source, it calls the onSelect handler and then updates the input value. Therefore, I grab the input value using a ref attached to the input, then use a 0ms setTimeout to set the input value to that. The setTimeout makes that call happen after the current tick in the event loop, which gives Combobox enough time to do its thing before I smack its hand and put my value back like I want it
          const userInput = inputRef.current?.value || ``
          setTimeout(() => setInputText(userInput), 0)
        }}
      >
        <ComboboxInput
          ref={inputRef}
          id={id}
          autocomplete={false}
          value={inputText}
          onChange={evt => setInputText(evt.target.value)}
          placeholder={placeholder}
          style={{
            backgroundColor: `var(--background-color-35)`,
            border: `1px solid var(--acnh-color-yellow)`,
            borderRadius: `6px`,
            color: `#ecebea`,
            fontSize: `1em`,
            padding: `0.25em 0.375em 0.375em`,
            width: `100%`,
          }}
        />
        <ComboboxPopover style={{ maxHeight: 300, overflow: `auto` }}>
          {allVillagers && (
            <ComboboxList>
              {allVillagers.map(villager => (
                <ComboboxOption value={villager.id}>{villager.name}</ComboboxOption>
              ))}
            </ComboboxList>
          )}
        </ComboboxPopover>
      </Combobox>
    </div>
  )
}
