import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from '../Item/Item';

const Topic = () => {

    // const topic = useLoaderData();
    // console.log(topic)
    const  [topic , setTopic] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/quiz/1')
        .then(res => res.json())
        .then(data => setTopic(data))
    },[])

    return (
        <div>

            <h1>This is topic page</h1>
            {
                // topic.map(topic => <Item topic={topic}></Item>)
            }
        </div>
    );
};

export default Topic;