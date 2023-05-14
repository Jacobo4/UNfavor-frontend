import React from 'react'
import { ResponsiveLine } from '@nivo/line'

const data = [
    {
      "id": "japan",
      "color": "hsl(73, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 185
        },
        {
          "x": "helicopter",
          "y": 253
        },
        {
          "x": "boat",
          "y": 17
        },
        {
          "x": "train",
          "y": 216
        },
        {
          "x": "subway",
          "y": 197
        },
        {
          "x": "bus",
          "y": 194
        },
        {
          "x": "car",
          "y": 181
        },
        {
          "x": "moto",
          "y": 69
        },
        {
          "x": "bicycle",
          "y": 243
        },
        {
          "x": "horse",
          "y": 70
        },
        {
          "x": "skateboard",
          "y": 231
        },
        {
          "x": "others",
          "y": 101
        }
      ]
    },
   
  ];

const LineChart=()=> {
  return (
    <div style={{height: 500}}>
        <h2>Flujo de usuarios al mes</h2>
        <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </div>
    
  )
}

export default LineChart
