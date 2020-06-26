// reducers/index.js

import { combineReducers } from 'redux'
import todos from './todos'
import drawerReducer from './layout'

export default combineReducers({
  todos,
  drawer: drawerReducer,
})

// export default rootReducer