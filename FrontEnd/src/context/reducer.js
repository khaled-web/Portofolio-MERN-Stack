import {
 CLEAR_ALERT,
 DISPLAY_ALERT,
 SIDEBAR_OPEN,
 SIDEBAR_CLOSE,
 TOGGLE_SIDEBAR,
 HANDLE_CHANGE,
 CLEAR_VALUES,
 SEND_MESSAGE_BEGIN,
 SEND_MESSAGE_SUCCESS,
 SEND_MESSAGE_ERROR
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
 //sendMessageBegin
 if (action.type === SEND_MESSAGE_BEGIN) {
  return {
   ...state,
   isLoading: true
  }
 }
 //sendMessageSuccess
 if (action.type === SEND_MESSAGE_SUCCESS) {
  return {
   ...state,
   isLoading: false,
   showAlert: true,
   alertType: 'success',
   alertText: 'Your Message Is Sent...',
   client: action.payload.name,
   token: action.payload.token,
   message: action.payload.message
  }
 }
 //sendMessageError
 if (action.type === SEND_MESSAGE_ERROR) {
  return {
   ...state,
   isLoading: false,
   showAlert: true,
   alertType: 'danger',
   alertText: action.payload.msg
  }
 }
 //clearValues
 if (action.type === CLEAR_VALUES) {
  return {
   ...state,
   client: '',
   token: '',
   message: ''
  }
 }
 throw new Error(`no such action : ${action.type}`)
}

export default reducer;