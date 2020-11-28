import { Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover } from '@reach/combobox'
// import '@reach/combobox/styles.css'
import { h } from 'preact'
import { useRef, useState } from 'preact/hooks'
import useVillagers from './useVillagers'

function Chip({ text, onDelete = () => {} }) {
  return (
    <div className="chip">
      <small>{text}</small>
      <button type="button" onClick={() => onDelete(text)}>
        ✖
      </button>
    </div>
  )
}

export default function VillagerCombobox({
  placeholder,
  id,
  labelText,
  onSelect = () => {},
  multiSelect = false,
  onDeselect = () => {},
}) {
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
          } else {
            setInputText(selection.name)
          }
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
      {selectedVillagers.length ? (
        <div className="chip-container">
          {selectedVillagers.map(villagerId => {
            const villager = allVillagers.find(v => v.id === villagerId)
            return (
              <Chip
                key={villagerId}
                text={villager.name}
                onDelete={() => {
                  onDeselect(allVillagers.find(v => v.id === villagerId))
                  setSelectedVillagers(selectedVillagers.filter(v => v !== villagerId))
                }}
              />
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
