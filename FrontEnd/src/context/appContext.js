//.............
//importing
//.............

import React, {
 useState,
 useReducer,
 useContext,
 useEffect
} from 'react';
import {
 DISPLAY_ALERT,
 CLEAR_ALERT,
 REGISTER_USER_BEGIN,
 REGISTER_USER_SUCCESS,
 REGISTER_USER_ERROR,
 LOGIN_USER_BEGIN,
 LOGIN_USER_SUCCESS,
 LOGIN_USER_ERROR,
 SETUP_USER_BEGIN,
 SETUP_USER_SUCCESS,
 SETUP_USER_ERROR,
 TOGGLE_SIDEBAR,
 LOGOUT_USER,
 UPDATE_USER_BEGIN,
 UPDATE_USER_SUCCESS,
 UPDATE_USER_ERROR,
 HANDLE_CHANGE,
 CLEAR_VALUES,
 SIDEBAR_OPEN,
 SIDEBAR_CLOSE,

} from './action';
import reducer from './reducer'
import axios from 'axios'

//.............
//App.
//.............

//initialState
const initialState = {
  //authIssues
 isLoading: false,
 showAlert: false,
 alertText: '',
 alertType: '',
 isSidebarOpen:false,
}

//AppContext
const AppContext = React.createContext();

//AppProvider->>index.js
const AppProvider = ({children})=>{
 const [state, dispatch]=useReducer(reducer, initialState);


  //openSidebar
  const openSideBar = ()=>{
    dispatch({type:SIDEBAR_OPEN})
  }
  //closeSideBar
  const closeSideBar = ()=>{
    dispatch({type:SIDEBAR_CLOSE})
  }
  //Toggle-sidebar
  const toggleSidebar = ()=>{
    dispatch({type:TOGGLE_SIDEBAR})
  }

  return <AppContext.Provider value={{
  ...state,
  openSideBar, 
  closeSideBar,
  toggleSidebar, 
  }}>
  {children}
 </AppContext.Provider>
}

//useAppContext
const UseAppContext = ()=>{
 return useContext(AppContext)
}

//.............
//exporting.
//.............
//export AppProvider, initialState
export {AppProvider, initialState, UseAppContext}