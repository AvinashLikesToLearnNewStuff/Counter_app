import React, { Component } from 'react';

const NavBar = ({totalCounters})=>{
    console.log('Navbar-rendered');
    //stateless functional components cannot have lifecycle hooks 
    return (
        
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar  

        <span className='badge badge-pill badge-secondary'>
        {totalCounters}            
        </span>

        </a></nav>
    );


} ;

export default NavBar;
