import { createContext, h } from 'preact'
import { useState } from 'preact/hooks'
import useVillagers from './useVillagers'

export const AppContext = createContext()
export function AppProvider({ children }) {
  const [selectedTarget, setSelectedTarget] = useState(null)
  const [exclusions, setExclusions] = useState([])
  const [exclusionMax, setExclusionMax] = useState(0)
  const allVillagers = useVillagers()
  return (
    <AppContext.Provider
      value={{
        selectedTarget,
        setSelectedTarget,
        exclusions,
        setExclusions,
        exclusionMax,
        setExclusionMax,
        allVillagers,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
