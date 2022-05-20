import React from "react";
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, LineChart, Line } from "recharts";


const Chart=()=>{

const earn =[

{
    Employee:1,
earning:"$0",
Weekday:"Mon"
},
{ Employee:2,
    earning:"$1k",
    Weekday:"Tue"
    },
    {
        Employee:3,
        earning:"$2k",
        Weekday:"Wed"
        },
        {
            Employee:4,
            earning:"$3k",
            Weekday:"Thu"
            },
            {
                Employee:5,
                earning:"$4k",
                Weekday:"Fri"
                },
                {
                    Employee:6,
                 earning:"$5k",
                    Weekday:"Sat"
                    },
                    {
                        Employee:7,
                        earning:"$6k",
                        Weekday:"Sun"
                        }
                                                                                    


] 

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

return(
<>
<h1>hiiiiii</h1>
{/* 
<BarChart width={730} height={250} 
margin={{top:5, right:30, left:20, bottom:5}} data={earn}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="Weekday"/>
<YAxis />
<Tooltip/>
<Legend/>
<Bar dataKey="Employee"  fill="#8884d8"/> */}



{/* </BarChart> */}




{/* export default class Example extends PureComponent { */}
{/* //   static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r'; */}


      
        <BarChart
          width={500}
          height={300}
          data={earn}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Weekday" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="earning" fill="#8884d8" />
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      

  






</>



)



}
export default Chart