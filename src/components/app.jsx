import { Component } from 'react'
import PropTypes from 'prop-types'
import PageLayout from '../layouts/page.layout'
import Header from '../layouts/header'
import Footer from '../layouts/footer'
import './app.css'

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
        <Footer />
      </PageLayout>
    )
  }
}

export default App