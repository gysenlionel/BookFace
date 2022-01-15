import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { StateProvider } from './components/StateProvider/StateProvider'
import reducer, { initialState } from './Reducer/Reducer'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { compose } from '@mui/system'
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
// centralisateur de reducers
import rootReducer from './Reducer/index'
import { getUsers } from './actions/users.actions'
// faire marché les  outils de dev (redux-devtools)
// thunk permet de faire des req async avec redux
// logger pas obligé outils pour voir les info dans la console
const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk, logger))
)
// avoir tout la data des users
store.dispatch(getUsers())

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <StateProvider initialState={initialState} reducer={reducer}> */}
        <App />
        {/* </StateProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
