import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from '../Item/Item';

const Topic = () => {

    const topic = useLoaderData();
    console.log(topic)
    return (
        <div>

            <h1>This topic page</h1>
            {
        
            }
        </div>
    );
};

export default Topic;