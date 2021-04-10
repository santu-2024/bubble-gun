import React from 'react'
import PageLayout from '../layouts/PageLayout'
import Header from './common/Header'
import Main from './Main'
import PageContent from './PageContent'
import Thumbs from './Thumbs'
import './App.css'

export default function App(props) {
  return (
    <PageLayout>
      <Header />
      <Main>
        <PageContent title={props.pages.main.title} role='contentinfo'>
          <div className='text more'>{props.pages.main.description}</div>
        </PageContent>
        <PageContent title={props.title}>
          <Thumbs data={props.profiles} />
        </PageContent>
      </Main>
    </PageLayout>
  )
}