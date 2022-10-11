import React from 'react';

const History = ({data}) => {
    const {id, name, logo, total} = data;
    return (
        <div className='p-3 md:p-16'>
         <div className="card card-side bg-base-100  shadow-xl">
  <figure className='bg-blue-100 '><img src={logo} alt="Movie"/></figure>
  <div className="p-4 md:ml-5 card-body">
    <h2 className="text-2xl md:text-3xl font-bold">{name}</h2>
    <p>Total  {total} Quiz</p>
    
  </div>
</div>
        </div>
    );
};

export default History;