class IndexedDB {
  constructor(db) {
    this.db = db
  }

  addMany(store, data) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(store, `readwrite`)
      transaction.oncomplete = evt => {
        resolve(evt)
      }
      transaction.onerror = reject
      const objStore = transaction.objectStore(store)
      data.forEach(item => {
        objStore.add(item)
      })
    })
  }

  getAll(store) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(store)
      transaction.onerror = reject
      const request = transaction.objectStore(store).getAll()
      request.onsuccess = evt => {
        resolve(evt.target.result)
      }
      request.onerror = reject
    })
  }
}

export default function getDb(name, { version, handleUpgrade = db => db } = {}) {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      return reject(new Error(`indexedDb could not be accessed`))
    }
    const request = indexedDB.open(name, version)
    request.onerror = err => reject(err)
    request.onsuccess = evt => resolve(new IndexedDB(evt.target.result))
    request.onupgradeneeded = evt => {
      handleUpgrade(evt.target.result)
      // resolve(new IndexedDB(db))
    }
    // This handler will only be needed if I make changes to the data caching in the future
    // request.onblocked = evt => {
    //   console.log(evt)
    // }
  })
}
