//.............
//importing
//.............

import React, {
 useReducer,
 useContext,
 useNavigate
} from 'react';

import {
 CLEAR_ALERT,
 DISPLAY_ALERT,
 TOGGLE_SIDEBAR,
 SIDEBAR_OPEN,
 SIDEBAR_CLOSE,
 SEND_MESSAGE_BEGIN,
 SEND_MESSAGE_SUCCESS,
 SEND_MESSAGE_ERROR,
 CLEAR_VALUES
} from './action';
import reducer from './reducer'
import axios from 'axios'

//.............
//App.
//.............


//initialState
const initialState = {

 isLoading: false,
 showAlert: false,
 alertText: '',
 alertType: '',
 isSidebarOpen:false,
 token:null,
 client:null,
 message:null
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
  //clearValues
  const clearValues = ()=>{
    dispatch({type:CLEAR_VALUES})
  }


  //sendMessage
  const sendMessage = async (clientData)=>{
    dispatch({type:SEND_MESSAGE_BEGIN})
    try {
      const response = await axios.post('http://localhost:5000/api/v1/sendMessage', clientData)
      console.log(response)
      const {name,email,message, token} =response.data
      dispatch({
        type:SEND_MESSAGE_SUCCESS,
        payload:{name, email, message, token}
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type:SEND_MESSAGE_ERROR,
        payload:{
          msg:error.response.data.msg
        }
      })
    }
    clearAlert()
  }

  return <AppContext.Provider value={{
  ...state,
  openSideBar, 
  closeSideBar,
  toggleSidebar, 
  displayAlert,
  sendMessage,
  clearValues
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