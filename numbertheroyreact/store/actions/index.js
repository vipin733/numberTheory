import { SET_DATA, SET_LOADING_STATUS, SET_LOADING_MORE, SET_USERS} from '../types'
import io from 'socket.io-client'
import axios from 'axios'

export const setLoadingStatus = status => ({
  type: SET_LOADING_STATUS,
  payload: status
})

export const setLoadingMore = status => ({
  type:  SET_LOADING_MORE,
  payload: status
})

export const setDashboardData = dashboardData => ({
  type: SET_DATA,
  payload: dashboardData
})

export const setUsersData = userData => ({
  type: SET_USERS,
  payload: userData
})

export const onDashboardRequest = () => {
  return async dispatch => {
    try {
      dispatch(setLoadingStatus(true))
      let url = process.env.API_URL+'dashboard'
      let response = await axios.get(url)
      dispatch(setDashboardData(response.data.data))
      dispatch(setLoadingStatus(false))
    } catch (error) {
      console.log(error)
      dispatch(setLoadingStatus(false))
    }
  }
}


export const onUserRequest = (isLoading, userData) => {
  return async (dispatch) => {
    try {
      if (isLoading) {
        return
      }
      let data = {
        current_page: userData.users.length > 0 ? userData.current_page + 1 : 1,
        max_rows: userData.max_rows
      }
      if (userData.total_page < data.current_page) {
        return
      }
      dispatch(setLoadingMore(true))
      let url = process.env.API_URL+'users'
      let response = await axios.post(url, data)
      if (userData && userData.users.length > 0) {
        let resData = response.data.data
        resData.users = [...userData.users, ...resData.users]
        dispatch(setUsersData(resData))
      }else{
        dispatch(setUsersData(response.data.data))
      }
      dispatch(setLoadingMore(false))
      dispatch(setLoadingStatus(false))
    } catch (error) {
      console.log(error)
      dispatch(setLoadingMore(false))
      dispatch(setLoadingStatus(false))
    }
  }
}

export const initSocket = () => {
  return async dispatch => {
    try {
      window.onload = function() {
        const socket = io.connect(process.env.SOCKET_URL)
        socket.on('changeData', function(data){
          dispatch(setDashboardData(data))
        })
      }
    } catch (error) {

    }
  }
}