export const setLocalStorageItem = (keyName, keyValue, ttl) => {
  const data = {
    value: keyValue,
    ttl: Date.now() + ttl * 1000,
  }

  localStorage.setItem(keyName, JSON.stringify(data))
}

export const getLocalStorageItem = (keyName) => {
  const data = localStorage.getItem(keyName)
  if (!data) {
    return null
  }

  const item = JSON.parse(data)

  if (Date.now() > item.ttl) {
    localStorage.removeItem(key)
    return null
  }

  return item.value
}
