import { Component } from 'react'
import PropTypes from 'prop-types'
import PageLayout from '../layouts/page.layout'
import Main from './Main';
import Header from '../layouts/header'
import PageContent from './PageContent'
import Thumbs from './Thumbs'

// import 'bootstrap/dist/css/bootstrap.css';
import './app.css'

import Image from '../assets/images/models/thumb-img.jpg'

class App extends Component {
  static propTypes = {
    routes: PropTypes.object.isRequired
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const top_banner = {
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
          <PageContent title={top_banner.title} role='contentinfo'>
            <div className='text more' dangerouslySetInnerHTML={{ __html: top_banner.description }}></div>
          </PageContent>
          <PageContent title='Galleries'>
            <Thumbs models={data.models} />
          </PageContent>
        </Main>
      </PageLayout>
    )
  }
}

export default App