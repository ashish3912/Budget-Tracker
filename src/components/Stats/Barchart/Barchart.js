import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer
} from 'recharts';

export default class Example extends PureComponent {

  render() {
    return (
      <div style={{ width: '100%', height: 200 }}>
        <ResponsiveContainer>
          <BarChart 
            data={this.props.data}
            margin={{
              top: 30, right: 0, left: 0, bottom: 0,
            }}
          >
            <XAxis dataKey="month" />
            <YAxis />
            <Bar dataKey="price" fill="#8884d8" />
          
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
