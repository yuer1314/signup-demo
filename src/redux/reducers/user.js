let user = {
  username: '',
  email: '',
  avatar: ''
}

export default function userReducer(state = user, action) {
  switch (action.type) {
    case 'XXX':
      return state
    default:
      return state;
  }
}