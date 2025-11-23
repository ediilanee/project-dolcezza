import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homescreen from './pages/homescreen.jsx';
import Promocoes from './pages/promocoes.jsx';
import Negociodaloja from './pages/negociodaloja.jsx';
import Beantobar from './pages/beantobar.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Rolagem from './pages/rolagem';
import Pagtodososprodutos from './pages/pagtodososprodutos';
import Pagbolos from './pages/pagbolos';
import Pagcupcakes from './pages/pagcupcakes';
import Pagtrufas from './pages/pagtrufas';






function App() {
 

  return (
    <div className="App">
          
   <Router>
            <Homescreen />
            <Routes>
                <Route exact path="/" element={<Rolagem />} />
                <Route path="/todos os produtos" element={<Pagtodososprodutos />} />
                <Route path="/bolos" element={<Pagbolos />} />
               <Route path="/bolos" element={<Pagcupcakes />} />
               <Route path="/bolos" element={<Pagtrufas />} />


            </Routes>
           
</Router>
      
    </div>
    
  )
}

export default App

