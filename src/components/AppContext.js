import { createContext, h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import useVillagers from './useVillagers'

export const AppContext = createContext()
const initialShouldCache = JSON.parse(localStorage.getItem(`shouldCacheData`))
export function AppProvider({ children }) {
  const [selectedTarget, setSelectedTarget] = useState(null)
  const [exclusions, setExclusions] = useState([])
  const [exclusionMax, setExclusionMax] = useState(0)
  const [shouldCacheData, setShouldCacheData] = useState(
    typeof initialShouldCache === `boolean` ? initialShouldCache : true
  )
  useEffect(() => {
    localStorage.setItem(`shouldCacheData`, shouldCacheData)
  }, [shouldCacheData])
  const allVillagers = useVillagers()
  const villagerCount = allVillagers?.length ?? 0
  useEffect(() => {
    setExclusionMax(villagerCount - 25)
  }, [villagerCount])
  return (
    <AppContext.Provider
      value={{
        selectedTarget,
        setSelectedTarget,
        exclusions,
        setExclusions,
        exclusionMax,
        setExclusionMax,
        shouldCacheData,
        setShouldCacheData,
        allVillagers,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
