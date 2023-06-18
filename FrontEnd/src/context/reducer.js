import {
 CLEAR_ALERT,
 DISPLAY_ALERT,
 SIDEBAR_OPEN,
 SIDEBAR_CLOSE,
 TOGGLE_SIDEBAR,
 HANDLE_CHANGE,
 CLEAR_VALUES,
 SEND_CLIENT_BEGIN,
 SEND_CLIENT_SUCCESS,
 SEND_CLIENT_ERROR
} from './action'

const reducer = (state, action) => {
 //display alert
 if (action.type === DISPLAY_ALERT) {
  return {
   ...state,
   showAlert: true,
   alertType: 'danger',
   alertText: 'Please provide all values'
  }
 }
 //clear alert
 if (action.type === CLEAR_ALERT) {
  return {
   ...state,
   showAlert: false,
   alertType: '',
   alertText: ''
  }
 }
 //openSideBar
 if (action.type === SIDEBAR_OPEN) {
  return {
   ...state,
   isSidebarOpen: true
  }
 }
 //closeSideBar
 if (action.type === SIDEBAR_CLOSE) {
  return {
   ...state,
   isSidebarOpen: false
  }
 }
 //toggle-sidebar
 if (action.type === TOGGLE_SIDEBAR) {
  return {
   ...state,
   isSidebarOpen: !state.isSidebarOpen
  }
 }

 throw new Error(`no such action : ${action.type}`)
}

export default reducer;