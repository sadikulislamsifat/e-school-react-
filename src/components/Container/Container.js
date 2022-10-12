import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Statistic from '../Statistic/Statistic';
import History from './History/History';

const Container = () => {
    const topic = useLoaderData();
    // console.log(topic)
    // const {data} = topic;
    const {questions } = topic.data;
    // console.log(questions)
    return (
        <div>







            <div>
                {
                    questions.map(data => <History 
                    data={data}
                    key={data.id}
                    ></History>) 
                }
                {
                    // data.map(data => <Statistic
                    // key={data.id}
                    // data={data}
                    // ></Statistic>)
                }
            </div>
        </div>
    );
};

export default Container;