import { Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover } from '@reach/combobox'
// import '@reach/combobox/styles.css'
import { h } from 'preact'
import { useRef, useState } from 'preact/hooks'
import useVillagers from './useVillagers'

// FIXME: Placeholder, labels, etc. from props

export default function VillagerCombobox({ placeholder, id, labelText, onSelect = () => {}, multiSelect = false }) {
  const [inputText, setInputText] = useState(``)
  const [selectedVillagers, setSelectedVillagers] = useState([])
  const inputRef = useRef()
  const allVillagers = useVillagers()
  const fuzzyMatcher = new RegExp([...inputText].join(`.*`), `i`)
  const filteredVillagers = allVillagers?.filter(villager => fuzzyMatcher.test(villager.name)) ?? []
  return (
    <div>
      <label htmlFor={id}>
        <small>{labelText}</small>
      </label>
      {/* FIXME: Combobox doesn't quite fill the need, make my own eventually */}
      {/* Maybe look at Adobe Spectrum listbox for options list? */}
      {/* Also I want an X button at the right of the input */}
      <Combobox
        onSelect={selectedId => {
          const selection = allVillagers.find(villager => villager.id === selectedId)
          onSelect(selection)
          if (multiSelect) {
            if (selectedVillagers.includes(selection.id)) {
              const index = selectedVillagers.indexOf(selection.id)
              const newList = [...selectedVillagers]
              newList.splice(index, 1)
              setSelectedVillagers(newList)
            } else {
              setSelectedVillagers([...selectedVillagers, selection.id])
            }
          }
          // Combobox insists on setting the input text on select. I don't want it to do this. After looking in the Combobox source, it calls the onSelect handler and then updates the input value. Therefore, I grab the input value using a ref attached to the input, then use a 0ms setTimeout to set the input value to that. The setTimeout makes that call happen after the current tick in the event loop, which gives Combobox enough time to do its thing before I smack its hand and put my value back like I want it
          // const userInput = inputRef.current?.value || ``
          // setTimeout(() => setInputText(userInput), 250)
        }}
      >
        <ComboboxInput
          ref={inputRef}
          id={id}
          autocomplete={false}
          value={inputText}
          onChange={evt => setInputText(evt.target.value)}
          placeholder={placeholder}
        />
        <ComboboxPopover style={{ maxHeight: 300, overflow: `auto` }}>
          {filteredVillagers.length ? (
            <ComboboxList>
              {filteredVillagers.map(villager => (
                <ComboboxOption key={villager.id} value={villager.id}>
                  <div className={selectedVillagers.includes(villager.id) ? `selected` : ``}>
                    <span>{villager.name}</span>
                    {/* {multiSelect && selectedVillagers.includes(villager.id) ? <span></span> : null} */}
                  </div>
                </ComboboxOption>
              ))}
            </ComboboxList>
          ) : (
            `No matches found for ${inputText}`
          )}
        </ComboboxPopover>
      </Combobox>
    </div>
  )
}
