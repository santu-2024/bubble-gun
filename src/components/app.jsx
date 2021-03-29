import './app.styles.css'
import { Component } from 'react'
import PropTypes from 'prop-types'
import PageLayout from '../layouts/page.layout'
import Header from '../layouts/header'
import Footer from '../layouts/footer'

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
        <Header className='main' />
        <Footer />
      </PageLayout>
    )
  }
}

export default App