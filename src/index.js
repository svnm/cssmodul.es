import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import Search from './containers/Search'
import Header from './components/Header'
import { render } from 'react-dom'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
            <Header />
            <Search />
        </div>
      </Provider>
    )
  }
}

render(
  <Root />,
  document.getElementById('root')
)
