import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <div id='nav'>   
            <NavLink to="/" className='navlink' ><i class="bi bi-house" ></i> </NavLink>
            <NavLink to="/html" className='navlink'><i class="bi bi-filetype-html"></i>HTML</NavLink>
            <NavLink to="/CSS" className='navlink'><i class="bi bi-filetype-css"></i> CSS</NavLink>
            <NavLink to="/Javascript" className='navlink cursor-pointer' ><i class="bi bi-filetype-js"></i> Javascript</NavLink>
            <NavLink to="/Nodejs" className='navlink'><i class="bi bi-android"></i> Nodejs</NavLink>
            <NavLink to="/React" className='navlink'><i class="bi bi-filetype-jsx"></i> React</NavLink>
        </div>
        
    </div>
  )
}

export default Navbar