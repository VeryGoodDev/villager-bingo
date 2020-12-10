import { Fragment, h } from 'preact'
import { useCallback, useEffect, useRef, useState } from 'preact/hooks'
import '../assets/css/villager-combobox.styl'
import useVillagers from './useVillagers'

function Chip({ text, onDelete = () => {}, onClick }) {
  if (typeof onClick === `function`) {
    return (
      <button type="button" className="chip" onClick={onClick}>
        <small>{text}</small>
      </button>
    )
  }
  return (
    <div className="chip">
      <small>{text}</small>
      <button type="button" onClick={() => onDelete(text)}>
        ✖
      </button>
    </div>
  )
}

function Input({
  placeholder,
  id,
  labelText,
  clearable = false,
  onClear,
  style,
  inputRef,
  readOnly = false,
  readOnlyText,
  readOnlyDelete,
  disabled,
  ...rest
}) {
  const readOnlyStyles = { display: `block` }
  return (
    <Fragment>
      <label htmlFor={id} className={disabled ? `disabled` : ``}>
        <small>{labelText}</small>
      </label>
      <div
        className={[`input-wrapper`, disabled ? `disabled` : ``].join(` `)}
        style={readOnly ? { ...style, ...readOnlyStyles } : style}
      >
        {readOnly ? (
          <Chip text={readOnlyText} onDelete={readOnlyDelete} />
        ) : (
          <input ref={inputRef} type="text" id={id} placeholder={placeholder} disabled={disabled} {...rest} />
        )}
        {clearable ? (
          <button
            type="button"
            className="clear-input"
            aria-label="Clear input"
            onClick={() => {
              onClear?.()
              inputRef.current?.focus()
            }}
          >
            ✖
          </button>
        ) : null}
      </div>
    </Fragment>
  )
}

export function VillagerCombobox({
  placeholder,
  id,
  labelText,
  onSelect = () => {},
  multiSelect = false,
  onDeselect = () => {},
  onClearAll = () => {},
  disabled = false,
  filter = () => true,
}) {
  const [inputText, setInputText] = useState(``)
  const [showOptions, setShowOptions] = useState(false)
  const [selectedVillagers, setSelectedVillagers] = useState([])
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const [readOnly, setReadOnly] = useState(false)
  const [readOnlyText, setReadOnlyText] = useState(``)
  const highlightedRef = useRef()
  const inputRef = useRef()
  const optionsWrapperRef = useRef()
  const comboboxRef = useRef()
  const allVillagers = useVillagers()
  const fuzzyMatcher = new RegExp([...inputText].join(`.*`), `i`)
  const filteredVillagers = allVillagers?.filter(villager => filter(villager) && fuzzyMatcher.test(villager.name)) ?? []
  const handleSelect = villager => {
    if (disabled) return
    onSelect(villager)
    if (multiSelect) {
      if (selectedVillagers.includes(villager.id)) {
        const index = selectedVillagers.indexOf(villager.id)
        const newList = [...selectedVillagers]
        newList.splice(index, 1)
        setSelectedVillagers(newList)
      } else {
        setSelectedVillagers([...selectedVillagers, villager.id])
      }
      // eslint-disable-next-line babel/no-unused-expressions
      inputRef.current?.focus()
    } else {
      setReadOnly(true)
      setReadOnlyText(villager.name)
      setShowOptions(false)
      setHighlightedIndex(-1)
    }
  }
  const handleEscape = useCallback(evt => {
    if (evt.code === `Escape`) {
      setShowOptions(false)
      window.removeEventListener(`keydown`, handleEscape)
    }
  }, [])
  const handleHackyBlur = useCallback(evt => {
    if (!comboboxRef.current?.contains(evt.target)) {
      setShowOptions(false)
      document.removeEventListener(`click`, handleHackyBlur)
    }
  }, [])
  useEffect(() => {
    if (showOptions) {
      window.addEventListener(`keydown`, handleEscape)
      document.addEventListener(`click`, handleHackyBlur)
    }
  }, [showOptions, handleEscape, handleHackyBlur])
  // FIXME: Find a way to do this where I can have a clear conscience
  useEffect(() => {
    if (!showOptions || !highlightedRef.current) return
    const { scrollTop: parentScrollTop, offsetHeight: parentOffsetHeight } = optionsWrapperRef.current
    const { offsetTop: optionOffsetTop, offsetHeight: optionOffsetHeight } = highlightedRef.current
    if (optionOffsetTop + optionOffsetHeight > parentScrollTop + parentOffsetHeight) {
      highlightedRef.current.scrollIntoView(false)
    } else if (optionOffsetTop < parentScrollTop) {
      highlightedRef.current.scrollIntoView()
    }
  }, [highlightedRef.current, showOptions])
  return (
    <div ref={comboboxRef} className="combobox-wrapper">
      <Input
        inputRef={inputRef}
        id={id}
        placeholder={placeholder}
        labelText={labelText}
        value={inputText}
        disabled={disabled}
        onInput={evt => {
          setInputText(evt.target.value)
          if (!showOptions) setShowOptions(true)
        }}
        style={
          showOptions
            ? {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              }
            : undefined
        }
        clearable={inputText.length || showOptions}
        onClear={() => {
          if (showOptions) {
            setShowOptions(false)
          } else {
            setInputText(``)
          }
        }}
        onFocus={evt => {
          if (evt.relatedTarget) return
          setShowOptions(true)
        }}
        onClick={() => {
          if (!showOptions) setShowOptions(true)
        }}
        onKeyDown={evt => {
          switch (evt.code) {
            case `ArrowDown`:
              setHighlightedIndex(prev => (prev === filteredVillagers.length - 1 ? 0 : prev + 1))
              break
            case `ArrowUp`:
              setHighlightedIndex(prev => (prev === 0 ? filteredVillagers.length - 1 : prev - 1))
              break
            case `Enter`:
              handleSelect(filteredVillagers[highlightedIndex])
              break
          }
        }}
        readOnly={readOnly}
        readOnlyText={readOnlyText}
        readOnlyDelete={() => {
          onDeselect()
          setReadOnly(false)
        }}
      />
      {/* Popup */}
      {!disabled && showOptions ? (
        <div ref={optionsWrapperRef} className="options-wrapper">
          <ul className="options-list">
            {filteredVillagers.map((villager, idx) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
              <li
                ref={highlightedIndex === idx ? highlightedRef : undefined}
                key={villager.id}
                className={`option ${selectedVillagers.includes(villager.id) ? `selected` : ``} ${
                  highlightedIndex === idx ? `highlighted` : ``
                }`}
                onClick={() => handleSelect(villager)}
              >
                {villager.name}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {selectedVillagers.length ? (
        <div className="chip-container">
          <Chip
            text="Clear All"
            onClick={() => {
              onClearAll?.()
              setSelectedVillagers([])
            }}
          />
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
