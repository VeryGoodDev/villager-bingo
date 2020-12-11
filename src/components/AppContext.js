import { createContext, h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import useVillagers from './useVillagers'

export const AppContext = createContext({})
const initialShouldCache = JSON.parse(localStorage.getItem(`shouldUseCache`))
export function AppProvider({ children }) {
  const [selectedTarget, setSelectedTarget] = useState(null)
  const [exclusions, setExclusions] = useState([])
  const [exclusionMax, setExclusionMax] = useState(0)
  const [shouldUseCache, setShouldUseCache] = useState(
    typeof initialShouldCache === `boolean` ? initialShouldCache : true
  )
  useEffect(() => {
    if (shouldUseCache === false) {
      indexedDB.deleteDatabase(`bingo`)
    }
    localStorage.setItem(`shouldUseCache`, shouldUseCache)
  }, [shouldUseCache])
  const allVillagers = useVillagers(shouldUseCache)
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
        shouldUseCache,
        setShouldUseCache,
        allVillagers,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
