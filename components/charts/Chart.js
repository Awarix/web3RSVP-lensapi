import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { date: '14.10', follow: 132, following: 66 },
    { date: '15.10', follow: 222, following: 128 },
    { date: '16.10', follow: 332, following: 228 },
    { date: '17.10', follow: 355, following: 428 },
    { date: '18.10', follow: 281, following: 758 },
  ];

const Chart = () => {
  return (
    <div className='chart' style={{ width: "500px", height:"400px"}}>
        <ResponsiveContainer >
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='lightgray'/>
          <XAxis dataKey="date" />
          <Tooltip />
          <Area type="monotone" dataKey="follow" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="following" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart