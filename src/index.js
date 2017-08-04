import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './reducers'

import './index.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import developmentState from './data/developmentState'

let store = createStore(reducer, developmentState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
)

registerServiceWorker()
