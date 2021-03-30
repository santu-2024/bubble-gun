import { Component } from 'react'
import PropTypes from 'prop-types'
import PageLayout from '../layouts/page.layout'
import Header from '../layouts/header'
import Footer from '../layouts/footer'
import './app.css'
import 'bootstrap/dist/css/bootstrap.css';
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
        <main id='main' className='flex-order-4 flex-grow bg-body' role='main'>
          <div className='c-main c-news width-full'>
            <div className='dashboard wrapper px-2:md px-0:xl mx-auto pt-5:md max-w-desktop-small:md max-w-desktop-large:lg'>
            </div>
          </div>
        </main>
        <div className='findtalent'>
          <div className='row inner'>
            <div className='col-12'>
              <div className='cta'>

              </div>
            </div>
          </div>
        </div>
        <Footer />
      </PageLayout>
    )
  }
}

export default App