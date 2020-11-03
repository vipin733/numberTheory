import { SET_DATA, SET_LOADING_STATUS, SET_USERS, SET_LOADING_MORE } from '../types'

const initialState = {
  isLoading:true,
  isLoadingMore: false,
  dashboardData: {},
  userData: {
    users: [],
    headers: [],
    current_page: 1,
    max_rows: 30
  }
}

const rootReducer = (state = initialState, action) =>  {
  switch (action.type) {
    case SET_DATA:
      return { ...state,  dashboardData:action.payload }
    case SET_LOADING_STATUS:
      return { ...state,  isLoading:action.payload }
    case SET_USERS:
      return { ...state,  userData:action.payload }
    case SET_LOADING_MORE:
      return { ...state,  isLoadingMore:action.payload }
    default:
      return state
  }
}

export default rootReducer