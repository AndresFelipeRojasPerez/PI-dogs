import './App.css';
import Landing from './Views/Landing/Landing'
import Home from './Views/Home/Home';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';


function App() {



  return (
    <div className="App">

      <Routes>
        <Route path ="/" element={<Landing/>} />
        <Route path ="/home" element={<Home/>} />
      </Routes>
      
    </div>
  );
}

export default App;
