import { h } from 'preact'

// Shamelessly stolen from https://joshwcomeau.com/react/modern-spacer-gif/#the-code
export default function Spacer({ size, axis }) {
  const height = axis === `horizontal` ? 1 : Number(size)
  const width = axis === `vertical` ? 1 : Number(size)
  return (
    <span
      style={{
        display: `block`,
        height,
        minHeight: height,
        minWidth: width,
        width,
      }}
    />
  )
}
