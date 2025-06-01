import {Route,Routes} from 'react-router-dom';
import './App.css';
import Html from './Main/Html';
import Css from './Main/Css';
import Javascript from './Main/Javascript';
import Nodejs from './Main/Nodejs';
import React1 from './Main/React1';
import Navbar from './Main/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div>
      <Navbar/>
     <Routes>
      <Route path="/html" element={<Html/>}/>
      <Route path="/css" element={<Css/>}/>
      <Route path="/javascript" element={<Javascript/>}/>
      <Route path="/nodejs" element={<Nodejs/>}/>
      <Route path="/react" element={<React1/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
