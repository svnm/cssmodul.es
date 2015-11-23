import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import Search from './containers/Search'
import Header from './components/Header'
import Footer from './components/Footer'

/* generic styles */
import styles from './styles/base.css';

import configureStore from './store'
const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
            <Header />
            <Search />
            <Footer />
        </div>
      </Provider>
    )
  }
}

render(
  <Root />,
  document.getElementById('root')
)
