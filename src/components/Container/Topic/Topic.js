import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from '../Item/Item';

const Topic = () => {

    const topic = useLoaderData();
    console.log(topic)
    const {data} = topic;
    

    

    return (
        <div className='mt-20 flex justify-center align-center'>

            <div className='grid gird-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5 md:px-8 lg:px-12'>
            {
             
               data.map((topic) => <Item 
               topic={topic}
               key={topic.id}
               ></Item>)
             }
            </div>
           
        </div>
    );
};

export default Topic;