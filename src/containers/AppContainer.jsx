import React, { useEffect, useState } from 'react'
import { storage } from '../assets/data'
import App from '../components/App'

export default function AppContainer() {
  const initialState = storage.getProfiles()
  const [data, setData] = useState(initialState)

  const loadData = async () => {
    try {
      await fetch('/api/profiles.json')
        .then(resp => resp.json())
        .then(setData)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    document.title = storage.pages.main.title
    loadData()
  }, [])

  return (
    <App {...data} pages={storage.pages} />
  )
}