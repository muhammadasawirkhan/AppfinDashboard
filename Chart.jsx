import React from 'react'
import {Chart as Chartjs} from "chart.js/auto"
import {Bar} from "react-chartjs-2"

const Chart = () => {
  return (
    <div className='relative w-full h-auto p-4'>
        <Bar className='m-2 lg:p-3'
    data={{
        labels:["Views","Subscription","Likes"],
        datasets:[
            {
                label:"Analytics",
                data:[1200,1000,600],
                backgroundColor:[
                    "rgb(55,48,163)",
                    "rgb(109,40,217)",
                    "rgb(30,27,75)"
                ]

            },
        ],
    }}
    /></div>
  )
}

export default Chart;
