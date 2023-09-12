import './style.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Home';
import About from './About';
import Contact from './contact'; 
import Navbar from './navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from './Slider';



function App() {
    return(
        <Router >
          
     <div>
     <Navbar/>
     
     <Routes>
     <Route path="/Slider" element={<Slider />}>
        
        </Route>
     <Route path="/Home" element={<Home />}>
        
        </Route>

        <Route path="/About" element={<About />}>
        
        </Route>
          
        <Route path="/Contact" element={<Contact />}>
        
        </Route>

        </Routes>
       
     </div>
     
     </Router>
    );
}

export default App;
