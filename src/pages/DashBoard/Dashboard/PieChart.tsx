import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { useEffect } from "react";

const data = [
    {
      id: "Neutros",
      label: "Neutros",
      value: 322,
    }, 
    {
        id: "Negativos",
        label: "Negativos",
        value: 170,
      },
    {
        id: "Positivos",
        label: "Positivos",
        value: 58,
        color: "#61cdbb"
      }
  ];

const PieChart=()=>{
  return (
    <div style={{height: 500}}>
        <h2>Calificaciones de los usuarios</h2>
        <ResponsivePie
        data={data}
        
        margin={{ top: 50, right: 50, bottom: 100, left: 50 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={2}
        colors={{ scheme: 'nivo' }}
        activeOuterRadiusOffset={5}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={"rgb(0, 0, 0)"}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        enableArcLabels={false}
        arcLabelsRadiusOffset={0.4}
        arcLabelsSkipAngle={7}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
   
  )
}

export default PieChart