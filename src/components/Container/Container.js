import React from 'react';
import { useLoaderData } from 'react-router-dom';
import History from './History/History';

const Container = () => {
    const topic = useLoaderData();
    console.log(topic)
    const {questions} = topic.data;
    console.log(questions)
    return (
        <div>







            <div>
                {
                    questions.map(data => <History 
                    data={data}
                    key={data.id}
                    ></History>) 
                }
            </div>
        </div>
    );
};

export default Container;