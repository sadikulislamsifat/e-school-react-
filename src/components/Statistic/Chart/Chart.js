import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Chart = ({topic}) => {
    const {id, name, logo, total} = topic;
    return (
        <div className='p-8 md:p-20'>
           
             <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={logo} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold">{name}</h1>
                  <p className="py-3 text-xl text-blue-500">id: {id}</p>
                  <p className="py-4 text-xl text-blue-500">Total {total} Quiz</p>
                  <button className="btn btn-primary">Start Practice <span className="ml-3"></span> 
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button>
                </div>
              </div>
             </div>
        </div>
    );
};

export default Chart;