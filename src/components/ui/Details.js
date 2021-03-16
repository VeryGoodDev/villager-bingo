import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import './css/details.styl'

export default function Details({ defaultOpen, onToggle, summaryContent, children, ...props }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  return (
    <details
      className="details-component"
      open={isOpen}
      onToggle={() => {
        if (!hasMounted) return
        setIsOpen((prev) => {
          const newValue = !prev
          if (onToggle) onToggle(newValue)
          return newValue
        })
      }}
      {...props}
    >
      <summary>{summaryContent}</summary>
      {children}
    </details>
  )
}
