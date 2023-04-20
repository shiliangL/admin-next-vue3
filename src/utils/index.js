import store from 'storejs'

export function setLocalStorage ({ key, value }) {
  return store.set(key, value)
}

export function getLocalStorage ({ key }) {
  return store.get(key)
}

export function clearLocalStorage () {
  return store.clear()
}