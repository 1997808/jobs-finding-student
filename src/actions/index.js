export const toggleDrawer = () => ({
  type: 'TOGGLE_DRAWER',
})

export const resetSort = () => ({
  type: 'RESET_SORT',
})

export const changeSort = (value) => ({
  type: 'CHANGE_SORT',
  value,
})

// let nextTodoId = 0
// export const addTodo = text => ({
//   type: 'ADD_TODO',
//   id: nextTodoId++,
//   text
// })

/*
export const ADD_CART = 'ADD_CART'

export const addCart = (product) => {
  return {
    type: ActionType.ADD_CART,
    product
  }
}

import cart from './cartAction'

export const ActionCreators = Object.assign({
  cart
})
*/

// export const toggleTodo = id => ({
//   type: 'TOGGLE_TODO',
//   id
// })