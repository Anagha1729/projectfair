import './App.css';
import { Routes,Route } from 'react-router-dom';
import PFHome from './Pages/PFHome';
import Projects from './Pages/Projects';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Footer from './Components/Footer';
import Auth from './Components/Auth';

function App() {
  return (
    <div className="App">
      <Routes>
<Route path='/' element={<PFHome/>}/>
<Route path='/login' element={<Auth/>}/>
<Route path='/register' element={<Auth register/>}/>
<Route path='/dashboard' element={<Dashboard/>}/>
<Route path='/projects' element={<Projects/>}/>

      </Routes>
      <Footer/>
     
    
    </div>
  );
}

export default App;
