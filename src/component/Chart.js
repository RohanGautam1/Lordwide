import React from "react";
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, LineChart, Line } from "recharts";


const Chart=()=>{

const earn =[

{
    Employee:1,
earning: 1000,
Weekday:"Mon"
},
{ Employee:2,
    earning:2000,
    Weekday:"Tue"
    },
    {
        Employee:3,
        earning:3000,
        Weekday:"Wed"
        },
        {
            Employee:4,
            earning:4000,
            Weekday:"Thu"
            },
            {
                Employee:5,
                earning:4000,
                Weekday:"Fri"
                },
                {
                    Employee:6,
                 earning:4000,
                    Weekday:"Sat"
                    },
                    {
                        Employee:7,
                        earning:4000,
                        Weekday:"Sun"
                        }
                                                                                    


] 


return(
<>
<h1>hiiiiii</h1>



      
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