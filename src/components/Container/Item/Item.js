import { faArrowRight, faRightLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({topic}) => {
    const {id, name, logo, } = topic;
    // console.log(topic)
    return (
        <div>
           <div className="card card-compact w-full  shadow-xl">
             <figure className='bg-blue-100'><img src={logo} alt="Shoes" /></figure>
             <div className=" flex justify-between px-4 md:px-1 lg:px-3 py-3">
               
             <h2 className="card-title">{name}</h2>
               <div className="card-actions justify-end">

                <Link to={`/container/${id}`}> 
                <button className="btn btn-primary">Start Practice
                 <span className='ml-2'>
                 <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                 </span> </button></Link>
               </div>
             </div>
           </div>
        </div>
    );
};

export default Item;