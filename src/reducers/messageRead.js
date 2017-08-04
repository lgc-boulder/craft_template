const messageRead = (state = false, action) => {
  switch( action.type ){
    case 'message-toggle-read':
      return !state

    default:
      return state

  }
}

export default messageRead
