import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Statistic.css'

const Statistic = () => {
    // const {id, name, logo, total} = data;
    const topic = useLoaderData().data;
    // const {data} = topic;
    console.log(topic)

    return (
        <div className='chart-container'>

            <div className='chart'>
            <ResponsiveContainer height={500} >
        <AreaChart
          width={500}
          height={400}
          data={topic}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
            </div>
           
           
            
        </div>
    );
};

export default Statistic;