import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from './Chart/Chart';

const Statistic = () => {
    // const {id, name, logo, total} = data;
    const topic = useLoaderData();
    const {data} = topic;
    // console.log(data)

    return (
        <div>
           
            {
                data.map((topic , index) => <Chart
                key={index}
                topic={topic}
                ></Chart>)
            }
        </div>
    );
};

export default Statistic;