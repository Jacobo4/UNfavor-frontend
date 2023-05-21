import React from "react";
import styles from "./Dashboard.module.css";
import { ResponsivePie } from "@nivo/pie";
import { useEffect } from "react";

let data = [
  {
    id: "0 estrellas",
    label: "0 estrellas",
    value: 2,
  },
  {
    id: "1 estrellas",
    label: "1 estrellas",
    value: 0,
  },
  {
    id: "2 estrellas",
    label: "2 estrellas",
    value: 0,
  },
  {
    id: "3 estrellas",
    label: "3 estrellas",
    value: 0,
  },
  {
    id: "4 estrellas",
    label: "4 estrellas",
    value: 0,
  },
  {
    id: "5 estrellas",
    label: "5 estrellas",
    value: 0,
  },
];

const PieChart = ({ arr }: { arr: any }) => {
  function adjustData() {
    for (let i = 0; i < arr.length; i++) {
      data[i].value = arr[i].count;
    }
  }
  useEffect(() => {
    adjustData();
    console.log(data);
  }, []);
  return (
    <div className={styles.pie}>
      <h2>Calificaciones de los usuarios</h2>
      <ResponsivePie
        data={data}
        margin={{ top: 50, right: 50, bottom: 100, left: 50 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={2}
        colors={{ scheme: "nivo" }}
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
            lineWidth: 2,
            spacing: 10,
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: -23,
            translateY: 45,
            itemsSpacing: 18,
            itemWidth: 50,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 7,
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
  );
};

export default PieChart;
