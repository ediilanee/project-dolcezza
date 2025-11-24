import './App.css'
import Homescreen from './pages/homescreen.tsx';
//import Promocoes from './pages/promocoes.jsx';
//import Negociodaloja from './pages/negociodaloja.jsx';
//import Beantobar from './pages/beantobar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Rolagem from './pages/rolagem';
import Pagtodososprodutos from './pages/pagtodososprodutos.jsx';
import Pagbolos from './pages/pagbolos.jsx';
import Pagcupcakes from './pages/pagcupcakes.jsx';
import Pagtrufas from './pages/pagtrufas.jsx';






function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Homescreen />} />
            <Route path="/tudo" element={<Pagtodososprodutos />} />
            <Route path="/bolos" element={<Pagbolos />} />
            <Route path="/cupcakes" element={<Pagcupcakes />} />
            <Route path="/trufas" element={<Pagtrufas />} />
        </Routes>
      </Router>  
    </div>
  )
}

export default App;

// cd vite-project
// npm run dev
// 