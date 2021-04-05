import React, { useEffect, useState } from 'react';

import PageLayout from './layouts/page.layout'
import Header from './layouts/header'
import Main from './components/Main';
import PageContent from './components/PageContent'
import Thumbs from './components/Thumbs'

// import 'bootstrap/dist/css/bootstrap.css';
import './app.css'
import Image from './assets/images/models/thumb-img.jpg'

export default function App() {
  const [models, setModels] = useState([])

  const loadModels = async () => {
    try {
      const response = await fetch('/api/models')
      const models = await response.json()
      setModels(models)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadModels()
  }, [])

  const pageInfo = {
    title: 'Welcome to Bubble Gun',
    description: "Along the way, we are go… <a title='Welcome to Bubble Gun' href='/'>To Bubble Gun ...</a>"
  }
  const data = {
    title: 'Galleries',
    models: [
      {
        id: 1,
        name: 'Lana Rhoades',
        thumb: Image
      }
    ]
  }

  return (
    <PageLayout>
      <Header />
      <Main>
        <PageContent title={pageInfo.title} role='contentinfo'>
          <div className='text more' dangerouslySetInnerHTML={{ __html: pageInfo.description }}></div>
        </PageContent>
        <PageContent title={data.title}>
          <Thumbs models={data.models} />
        </PageContent>
      </Main>
    </PageLayout>
  )
}