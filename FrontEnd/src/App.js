//..........
//importing
//..........

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home,About, Projects, Contact, Error} from './pages'




//..........
//App
//..........
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes> 
    </BrowserRouter>
  );
}


//..........
//exporting
//..........
export default App;
