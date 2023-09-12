import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
   return (
    <div className='landing-container'>
 <nav className="navbar navbar-expand-lg  navbar trn">
    <div class="container-fluid">
    
    <Link to="/Slider" class="nav-link active">Jaiser</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0" style={{ paddingRight: '20px' }}>
        <li class="nav-item">
          
          <Link to="/Home" class="nav-link active">Home</Link>
        </li>
        <li class="nav-item">
        
          <Link to="/About" class="nav-link ">About Us</Link>
        </li>
        
        <li class="nav-item">
          
          <Link to="/Contact" class="nav-link ">Contact Us</Link>
        </li>
      </ul>
    
     </div>
   </div>
 </nav>
 </div>
  )
}
