const init = {
  name: "",
  email: "",
  address: "",
  phone: "",
  member_type: "",
  receive_updates: true
}

const signup_form = (state = init, action) => {
  switch(action.type) {
    case 'UPDATE_FIELD':
      return Object.assign({}, state, {
        [action.field]: action.value
      })

    case 'TOGGLE_FIELD':
      return Object.assign({}, state, {
        [action.field]: !state[action.field]
      })

    default:
      return state
  }
};

export default signup_form;