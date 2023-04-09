 import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import {Pefi} from './Components/Context/DataContext'


const App = () => {
  return (
      <Pefi>
      
      <Router>
      <div>
       <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/*' element={<NotFound></NotFound>}/>
      <Route path='/notfound' element={<NotFound></NotFound>}/>
      <Route path='/about' element={<About></About>}/>
      </Routes>
     </div>
      </Router>
    </Pefi>
 
  )
}

export default App  