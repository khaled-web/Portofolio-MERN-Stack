import {
 CLEAR_ALERT,
 DISPLAY_ALERT,
 SIDEBAR_OPEN,
 SIDEBAR_CLOSE,
 TOGGLE_SIDEBAR,
 HANDLE_CHANGE,
 CLEAR_VALUES
} from './action'

const reducer = (state, action) => {
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