'use client'

interface manageLocalStorageProps {
  method: string
  key: string
  value?: any
}

export const manageLocalStorage = ({
  method,
  key,
  value
}: manageLocalStorageProps) => {
  if (method == 'set') {
    const data = JSON.parse(localStorage.getItem(key) || '[]')

    data.push(value)

    localStorage.setItem(key, JSON.stringify(data))

    return
  }
  if (method == 'push') {
    const data = JSON.parse(localStorage.getItem(key) || '[]')

    data.push(value)

    localStorage.setItem(key, JSON.stringify(data))

    return
  }
  if (method == 'removeAll') {
    localStorage.removeItem(key)

    return
  }
  if (method == 'update') {
    localStorage.setItem(key, JSON.stringify(value))

    return
  }

  const products = JSON.parse(localStorage.getItem(key) || '[]')

  return products
}
