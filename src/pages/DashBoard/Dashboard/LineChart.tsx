import React, { useEffect } from 'react'
import { ResponsiveLine } from '@nivo/line'
import styles from "./Dashboard.module.css";
let data = [
    {
      id: "Progress",
      
        data: [
        {
          x: "mes 1",
          y: 0
        },
        {
          x: "mes 2",
          y: 0
        },
        {
          x: "mes 3",
          y: 0
        },
        {
          x: "mes 4",
          y: 0
        },
        {
          x: "mes 5",
          y: 0
        },
        
        
      ]
    },
   
  ];

const LineChart=({ arr }: { arr: any })=> {
  function adjustData() {
    for (let i = 0; i < arr.length; i++) {
      data[0].data[i].y  = arr[i].count;
    }
  }
  useEffect(() => {
    
    adjustData();
    console.log(data[0]);
   
  }, [data[0]]);
  return (
    <div className={styles.line}>
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
            legend: 'Meses',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Usuarios nuevos por mes',
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
