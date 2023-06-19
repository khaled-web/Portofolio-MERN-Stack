import React, {useState, useEffect} from 'react'
import emailjs from '@emailjs/browser'
import {Navbar,Sidebar,Footer, Alert} from '../components'
import {UseAppContext} from '../context/appContext'
import {useNavigate} from 'react-router-dom'

  const initialState = {
    name:'',
    email:'',
    message:''
  }


const Contact = () => {
  const [values, setValues]=useState(initialState)
  const navigate = useNavigate()
  const {isLoading,showAlert, displayAlert,sendMessage,client,clearValues}=UseAppContext()
  //global state and useNavigate
  const handleChange = (e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    const {name, email, message}=values
    if(!name || !email || !message){
      displayAlert()
      return
    }
    const clientData = {name, email, message}
    sendMessage(clientData)
  }

  useEffect(()=>{
    if(client){
      setTimeout(()=>{
        navigate('/')
        clearValues()
      },3000)
    }
  },[client])

  // /* emailjs */
  // const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm('service_loyatsk', 'template_jdnr72g', form.current, 'EfcaVCTSmZFOsd7ZK')
  //     .then((result) => {
  //         console.log(result.text);
  //         window.location.reload(true)
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };
  return (
    <main>
      <Navbar/>
      <Sidebar/>
      <section className="section projects-page contact-bcg">
        <div className="section-title projects-title">
          {showAlert && <Alert/>}
          <h2>contact</h2>
          <div className="underline"></div>
          <div className="section-center">
              <form onSubmit={handleSubmit}>
                <input type="text" value={values.name} name="name" placeholder='name' onChange={handleChange}/>
                <input type="email" name="email" value={values.email}  placeholder='email' onChange={handleChange}/>
                <textarea name="message" value={values.message} placeholder='message' cols="30" rows="5" onChange={handleChange}></textarea>

                <button type='submit' className='contact-send' disabled={isLoading}>
                  send
                </button>
              </form>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  )
}

export default Contact
