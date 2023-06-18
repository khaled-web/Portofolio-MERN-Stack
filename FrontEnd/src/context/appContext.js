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
 CLEAR_ALERT,
 DISPLAY_ALERT,
 TOGGLE_SIDEBAR,
 SIDEBAR_OPEN,
 SIDEBAR_CLOSE,
 SEND_CLIENT_BEGIN,
 SEND_CLIENT_SUCCESS,
 SEND_CLIENT_ERROR
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
 showAlert: true,
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
  //clearAlert
  const clearAlert = ()=>{
    setTimeout(()=>{
      dispatch({type:CLEAR_ALERT})
    },3000)
  }
  //display alert
  const displayAlert = ()=>{
    dispatch({type:DISPLAY_ALERT})
    clearAlert()
  }

  return <AppContext.Provider value={{
  ...state,
  openSideBar, 
  closeSideBar,
  toggleSidebar, 
  displayAlert
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