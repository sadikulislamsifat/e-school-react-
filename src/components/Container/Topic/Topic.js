import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from '../Item/Item';

const Topic = () => {

    const topic = useLoaderData();
    const {data} = topic;
    console.log(topic)

    // const  [topic , setTopic] = useState([]);
    // useEffect(() => {
    //     fetch('https://openapi.programming-hero.com/api/quiz/1')
    //     .then(res => res.json())
    //     .then(data => setTopic(data))
    // },[])

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