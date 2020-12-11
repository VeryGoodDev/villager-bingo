import { useEffect, useState } from 'preact/hooks'
import { TEST_VILLAGERS } from '../mocks/villager-data'
import { findComplement, hexToHsl, hslToHex } from '../util/color-utils'
import getDb from '../util/idb'

function getVillagersFromApi() {
  return new Promise(resolve => setTimeout(resolve, 2000, TEST_VILLAGERS.map(transformVillager)))
  // return fetch(`https://acnhapi.com/v1a/villagers`)
  //   .then(res => res.json())
  //   .then(raw => raw.map(transformVillager))
}
function handleUpgrade(db) {
  db.createObjectStore(`villagers`, { keyPath: `id` })
  return db
}

export default function useVillagers(shouldUseCache) {
  const [villagers, setVillagers] = useState([])
  useEffect(() => {
    if (!villagers?.length) {
      if (shouldUseCache) {
        getDb(`bingo`, { handleUpgrade })
          .then(async db => {
            try {
              const cached = await db.getAll(`villagers`)
              if (!cached?.length) throw new Error(`No data cached`)
              setVillagers(cached)
            } catch (err) {
              if (err.message !== `No data cached`) {
                console.warn(err)
              }
              // If something went wrong reading from the db, just fetch from the API
              getVillagersFromApi().then(transformed => {
                setVillagers(transformed)
                db.addMany(`villagers`, transformed).catch(console.warn)
              })
            }
          })
          .catch(err => {
            // Something went wrong, just fetch from the API
            console.error(err)
            getVillagersFromApi().then(setVillagers)
          })
      } else {
        getVillagersFromApi().then(setVillagers)
      }
    }
  }, [shouldUseCache, villagers.length])
  return villagers
}

function transformVillager(villager) {
  const [hue, saturation, light] = hexToHsl(villager[`text-color`])
  const backgroundColor = hslToHex(hue, saturation, Math.max(25, light - 1))
  const complementaryColor = `#${findComplement(villager[`bubble-color`]).join(``)}`
  return {
    // Slightly darkened textColor
    backgroundColor,
    bubbleColor: villager[`bubble-color`],
    complementaryColor,
    icon: villager.icon_uri,
    id: villager.id,
    name: villager.name[`name-USen`],
    textColor: villager[`text-color`],
  }
}
