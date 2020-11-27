import { h } from 'preact'

export default function BingoCard({ villagers }) {
  if (!villagers?.length) {
    return null
  }
  return (
    <div className="bingo-card">
      {villagers.map(({ backgroundColor, bubbleColor, icon, id, name, textColor }) => (
        <button
          key={id}
          type="button"
          className="cell"
          onClick={evt => {
            evt.currentTarget.classList.toggle(`marked`)
          }}
        >
          <div className="cell-inner" style={{ backgroundColor }}>
            <img src={icon} aria-hidden="true" alt="" />
            <span className="name" style={{ backgroundColor: bubbleColor, color: textColor }}>
              {name}
            </span>
          </div>
        </button>
      ))}
    </div>
  )
}
