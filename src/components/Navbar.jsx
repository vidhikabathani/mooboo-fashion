import React from 'react';
import './navbar.css';
import '../Pages/stylesheet.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="flex">
                        <NavLink to='/'><h1 id='meesho'>MOOBOO</h1></NavLink>
                        <nav className='flex'>
                            <NavLink to='/'><h4>Home</h4></NavLink>
                            <NavLink to='/girls'><h4>Girls</h4></NavLink>
                            <NavLink to='/boys'><h4>Boys</h4></NavLink>
                            <NavLink to='/jewelery'><h4>Jewelery</h4></NavLink>
                            <NavLink to='/electronics'><h4>Electronics</h4></NavLink>
                            <NavLink to='/contact'><h4>Contact</h4></NavLink>
                        </nav>
                        <NavLink to='/login'><h3>Login</h3></NavLink>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Navbar