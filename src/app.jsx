import React, { useEffect, useState } from 'react';

import PageLayout from './layouts/page.layout'
import Header from './layouts/header'
import Main from './components/Main';
import PageContent from './components/PageContent'
import Thumbs from './components/Thumbs'

// import 'bootstrap/dist/css/bootstrap.css';
import './app.css'
import Image from './assets/images/models/thumb-img.jpg'

const data = {
  pageInfo: {
    title: 'Welcome to Bubble Gun',
    description: "Along the way, we are go… <a title='Welcome to Bubble Gun' href='/'>To Bubble Gun ...</a>"
  },
  modelsInfo: {
    title: 'Galleries',
    list: [
      {
        id: 1,
        name: 'Lana Rhoades',
        thumb: Image
      }
    ]
  }
};

export default function App() {
  const [models, setModels] = useState([])

  const loadModels = async () => {
    try {
      // const response = await fetch('/api/models')
      // const models = await response.json()
      setModels(models)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadModels()
  }, [])

  return (
    <PageLayout>
      <Header />
      <Main>
        <PageContent title={data.pageInfo.title} role='contentinfo'>
          <div className='text more' dangerouslySetInnerHTML={{ __html: data.pageInfo.description }}></div>
        </PageContent>
        <PageContent title={data.modelsInfo.title}>
          <Thumbs models={data.modelsInfo.list} />
        </PageContent>
      </Main>
    </PageLayout>
  )
}