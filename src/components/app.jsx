import { Component } from 'react'
import PropTypes from 'prop-types'
import PageLayout from '../layouts/page.layout'
import Main from './Main';
import Header from '../layouts/header'

import './app.css'
import '../layouts/main.styles.css'
import PageContent from './PageContent'
// import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  static propTypes = {
    routes: PropTypes.object.isRequired
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <PageLayout>
        <Header />
        <Main>
          <PageContent title='Welcome to Bubble Gun' role='contentinfo'>
            <div className='text more'>
              In this mini series we are going to Design and Build a chat application using Socket.io. We will first discuss basic design concepts while exploring the design for this application in Sketch. We will then move on to laying out our application in HTML and CSS, and lastly, will add Javascript to complete the functionality. Along the way, we are go… <a title='Welcome to Bubble Gun' href='/'>To Bubble Gun ...</a>
            </div>
          </PageContent>
          <PageContent title='Galleries'>
            <div className='grid masonry-thumbs'>

            </div>
          </PageContent>
        </Main>
      </PageLayout>
    )
  }
}

export default App