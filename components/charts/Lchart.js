import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Lchart = (props) => {
    const newData = [
        { date: '14.10', follow: props.follow, following: props.following },
        { date: '15.10', follow: 222, following: 100 }
      ]
  return (
    <div style={{width:"500px", height:"500px"}}>
    <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={newData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="follow" stroke="#000" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="following" stroke="#000" />
        </LineChart>
      </ResponsiveContainer>
      </div>
  )
}

export default Lchart