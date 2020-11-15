import { h } from 'preact'

export default function BingoCard({ villagers }) {
  if (!Array.isArray(villagers) || !villagers.length) {
    return null
  }
  return (
    <div className="bingo-card">
      {villagers.map(villager => (
        <button type="button" className="cell" onClick={() => {}}>
          <div className="cell-inner">
            <img src={villager.icon} aria-hidden="true" alt="" />
            <span className="name">{villager.name}</span>
          </div>
        </button>
      ))}
    </div>
  )
}
