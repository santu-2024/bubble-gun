import React, { useEffect, useState } from 'react';
import PageLayout from './layouts/page.layout'
import Header from './layouts/header'
import Main from './components/Main';
import PageContent from './components/PageContent'
import Thumbs from './components/Thumbs'
import './app.css'
import { pages } from './assets/data'

export default function App() {
  const initialState = { title: '', profiles: [] }
  const [data, setData] = useState(initialState)

  const loadData = async () => {
    try {
      await fetch('/profiles.json')
        .then(resp => resp.json())
        .then(setData)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <PageLayout>
      <Header />
      <Main>
        <PageContent title={pages.main.title} role='contentinfo'>
          <div className='text more'>{pages.main.description}</div>
        </PageContent>
        <PageContent title={data.title}>
          <Thumbs data={data.profiles} />
        </PageContent>
      </Main>
    </PageLayout>
  )
}