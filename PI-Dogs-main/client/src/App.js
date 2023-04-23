import './App.css';
import { Landing, Home, Form, Detail } from './Views';
import { Route, useLocation } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';


function App() {

 const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/>} 
      <Routes>
        <Route path ="/" element={<Landing/>} />
        <Route path ="/home" element={<Home/>} />
        <Route path ="/create" element={<Form/>} />
        <Route path ="/detail/:detailId" element={<Detail/>} />
      </Routes>
      
    </div>
  );
}

export default App;
