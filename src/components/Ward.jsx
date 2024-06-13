import React from "react";
import { BarChart, AreaChart, FunnelChart } from "@tremor/react";

const Ward = () => (
  <>
    <h3 className="text-lg font-medium text-[#052E41]">
      Average Number of Crimes by Day of the Week
    </h3>
    <BarChart
      className="mt-6 custom-bar-chart"
      data={[
        { name: "Friday", "Number of crimes that day": 5105 },
        { name: "Wednesday", "Number of crimes that day": 5036 },
        { name: "Tuesday", "Number of crimes that day": 4911 },
        { name: "Monday", "Number of crimes that day": 4863 },
        { name: "Thursday", "Number of crimes that day": 4763 },
        { name: "Saturday", "Number of crimes that day": 4653 },
        { name: "Sunday", "Number of crimes that day": 4209 },
      ]}
      index="name"
      showLegend={false}
      showAnimation={true}
      categories={["Number of crimes that day"]}
      colors={["cyan-900"]}
      layout="vertical"
      valueFormatter={(number) =>
        Intl.NumberFormat("us").format(number).toString()
      }
      yAxisWidth={80}
    />
    <h3 className="text-lg font-medium text-[#052E41]">
      Average Number of Crimes by Month
    </h3>
    <AreaChart
      className="mt-4 h-72"
      data={[
        { name: "January", "Number of crimes that month": 2369 },
        { name: "February", "Number of crimes that month": 2086 },
        { name: "March", "Number of crimes that month": 2518 },
        { name: "April", "Number of crimes that month": 2558 },
        { name: "May", "Number of crimes that month": 2913 },
        { name: "June", "Number of crimes that month": 3145 },
        { name: "July", "Number of crimes that month": 2926 },
        { name: "August", "Number of crimes that month": 3056 },
        { name: "September", "Number of crimes that month": 2982 },
        { name: "October", "Number of crimes that month": 3269 },
        { name: "November", "Number of crimes that month": 3111 },
        { name: "December", "Number of crimes that month": 2607 },
      ]}
      index="name"
      categories={["Number of crimes that month"]}
      colors={["cyan-900"]}
      showAnimation={true}
      showLegend={false}
      yAxisWidth={40}
    />
    <h3 className="text-lg font-medium text-[#052E41]">
      Average Number of Crimes by Time of Day
    </h3>
    <br />
    <FunnelChart
      evolutionGradient
      gradient={false}
      data={[
        { name: "Morning", value: 18.87 },
        { name: "Afternoon", value: 40.43 },
        { name: "Evening", value: 31.06 },
        { name: "Night", value: 9.64 },
      ]}
      index="name"
      categories={["value"]}
      color={["cyan-900"]}
      showAnimation={true}
      showYAxis={false}
    />
  </>
);

export default Ward;
