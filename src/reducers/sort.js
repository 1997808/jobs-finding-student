const sortReducer = (state = "default", action) => {
  switch (action.type) {
    case 'CHANGE_SORT':
      return action.value
    case 'RESET_SORT':
      return "default"
    default:
      return state
  }
}

export default sortReducer