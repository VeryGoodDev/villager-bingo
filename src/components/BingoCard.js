import { h } from 'preact'
import { useState } from 'preact/hooks'

export default function BingoCard() {
  const [thing, setThing] = useState(1)
  console.log(thing, setThing)
  return <div>Bingo Card</div>
}
