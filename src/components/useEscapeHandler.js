import { createContext, h } from 'preact'
import { useCallback, useContext, useEffect, useState } from 'preact/hooks'

function getLastHandler(handlers) {
  return handlers?.[handlers.length - 1]
}

export const EscapeHandlerContext = createContext()

export default function useEscapeHandler({ enabled, handler }) {
  const { handlers, setHandlers } = useContext(EscapeHandlerContext)
  const lastHandler = getLastHandler(handlers)
  const handleEscape = useCallback(
    evt => {
      if (evt.key === `Escape`) {
        window.removeEventListener(`keydown`, handleEscape)
        if (lastHandler) lastHandler()
      }
    },
    [lastHandler]
  )
  useEffect(() => {
    if (enabled) {
      setHandlers(prev => [...prev, handler])
    } else {
      setHandlers(prev => prev.filter(fn => fn !== handler))
    }
    window.addEventListener(`keydown`, handleEscape)
    return () => {
      window.removeEventListener(`keydown`, handleEscape)
    }
  }, [enabled, handler, handleEscape, setHandlers])
}

export function EscapeHandlerProvider({ children }) {
  const [handlers, setHandlers] = useState([])
  return <EscapeHandlerContext.Provider value={{ handlers, setHandlers }}>{children}</EscapeHandlerContext.Provider>
}
