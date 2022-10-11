import React from 'react';
import { useLoaderData } from 'react-router-dom';
import History from './History/History';

const Container = () => {
    const topic = useLoaderData();
    const {data} = topic;
    return (
        <div>
            <div>
                {
                    data.map(data => <History 
                    data={data}
                    key={data.id}
                    ></History>)
                }
            </div>
        </div>
    );
};

export default Container;