import React from 'react'
import { Route } from 'react-router-dom'

import Header from '../components/Header'

import HomeRoute from './home'
// import StylesRoute from './styles'
import ElementsRoute from './elements'
import ComponentsRoute from './components'

export default () => (
  <div>
    <Header />
    <Route exact path="/" component={HomeRoute} />
    <Route path="/styles" component={HomeRoute} />
    <Route path="/elements" component={ElementsRoute} />
    <Route path="/components" component={ComponentsRoute} />
  </div>
)
