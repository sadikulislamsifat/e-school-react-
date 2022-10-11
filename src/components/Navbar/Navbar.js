import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>

<div className="navbar bg-sky-700 md:px-7 text-white ">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-2xl md:text-3xl"><span className='text-rose-600'>E</span>- <span className='text-orange-500'>School</span></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal font-bold p-0">
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