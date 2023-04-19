import actions from './actions'

const initialState = { nom_user: localStorage.getItem('nom_user') }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.login: {
      localStorage.setItem('nom_user', 'Sahar')
      return { ...state, nom_user: 'Sahar' }
    }
    case actions.logout: {
      localStorage.setItem('nom_user', null)
      return { ...state, nom_user: null }
    }
    case actions.achat: {
      return { ...state, achat: 170 }
    }
    default: {
      return state
    }
  }
}

export default reducer
