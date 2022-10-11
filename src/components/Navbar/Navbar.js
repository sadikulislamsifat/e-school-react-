import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>

<div className="navbar bg-green-200 md:px-7">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-2xl"><span className='text-blue-600'>E</span>- <span className='text-red-600'>School</span></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li>
      <Link to="/topic">Topic</Link>
      </li>
      <li tabIndex={0}>
      <Link to="/container" >Statistic</Link>
        
      </li>
      <li> <Link to="/blog">Blog</Link></li>
    </ul>
  </div>
</div>
          
        </div>
    );
};

export default Navbar;