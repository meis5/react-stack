import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import 'library/styles'

import createStore from './store/createStore'
import Container from './containers'

const state = window.__PRELOADED_STATE__ ? window.__PRELOADED_STATE__ : {}
const store = createStore(state)

class Root extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Container />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default Root