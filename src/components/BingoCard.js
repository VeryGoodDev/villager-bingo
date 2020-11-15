import { h } from 'preact'

export default function BingoCard({ villagers }) {
  if (!Array.isArray(villagers) || !villagers.length) {
    return null
  }
  return (
    <div className="bingo-card">
      {villagers.map(({ backgroundColor, bubbleColor, textColor, name, icon, id }) => (
        <button
          key={id}
          type="button"
          className="cell"
          onClick={evt => {
            evt.currentTarget.classList.toggle(`marked`)
          }}
        >
          <div className="cell-inner" style={{ backgroundColor }}>
            <img src={icon} aria-hidden="true" alt="" style={{ backgroundColor }} />
            <span className="name" style={{ backgroundColor: bubbleColor, color: textColor }}>
              {name}
            </span>
          </div>
        </button>
      ))}
    </div>
  )
}
