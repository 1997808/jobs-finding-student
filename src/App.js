import React from 'react';
import './App.css';
import AppContainer from './screens/index'

//redux
import { Provider } from 'react-redux'
import { createStore } from "redux"

import combineReducers from './reducers/index'
// import index from './reducers/index'
let store = createStore(
  combineReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
