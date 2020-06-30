// reducers/index.js

import { combineReducers } from 'redux'
import drawerReducer from './layout'
import sortReducer from './sort'

export default combineReducers({
  drawer: drawerReducer,
  sort: sortReducer
})

// export default rootReducer