import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './Component/Home';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import Career from './Component/Career';
import Team from './Component/Team';
import Support from './Component/Support';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/career' element={<Career/>}/>
       <Route path='/team' element={<Team/>}/>
       <Route path='/support' element={<Support/>}/>
     </Routes>
    </div>
  );
}

export default App;
