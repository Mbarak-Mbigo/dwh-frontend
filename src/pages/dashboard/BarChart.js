import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Semptember",
  "October",
  "November",
  "December",
];

const ageGroupRange = [
  "0-4",
  "5-14",
  "15-24",
  "25-34",
  "35-44",
  "45-54",
  "55-64",
  "65-74",
  "75-84",
  "85-94",
  "95-104",
  "105 and over",
];

const data = [
  {
    date: "2021-01",
    male: 40000,
    female: 24000,
    ageGroup: 24000,
  },
  {
    date: "2021-02",
    male: 30000,
    female: 13980,
    ageGroup: 22100,
  },
  {
    date: "2021-03",
    male: 20000,
    female: 98000,
    ageGroup: 22900,
  },
  {
    date: "2021-04",
    male: 27800,
    female: 39080,
    ageGroup: 20000,
  },
  {
    date: "2021-05",
    male: 18900,
    female: 48000,
    ageGroup: 21810,
  },
  {
    date: "2021-06",
    male: 2390,
    female: 3800,
    ageGroup: 25000,
  },
  {
    date: "2021-07",
    male: 3490,
    female: 4300,
    ageGroup: 21000,
  },
  {
    date: "2021-08",
    male: 40000,
    female: 24000,
    ageGroup: 24000,
  },
  {
    date: "2021-09",
    male: 30000,
    female: 13980,
    ageGroup: 22100,
  },
  {
    date: "2021-10",
    male: 20000,
    female: 98000,
    ageGroup: 22900,
  },
  {
    date: "2021-11",
    male: 27800,
    female: 39080,
    ageGroup: 20000,
  },
  {
    date: "2021-12",
    male: 18900,
    female: 48000,
    ageGroup: 21810,
  },
];

const RenderBarChart = () => {
  const monthTickFormatter = (tick) => {
    const date = new Date(tick);

    return months[date.getMonth()];
  };

  const angeGroupRange = (tick) => {
    const date = new Date(tick);
    return ageGroupRange[date.getMonth()];
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          interval={0}
          tickFormatter={angeGroupRange}
          height={2}
          scale="band"
          xAxisId="agegroup"
        />
        <YAxis />
        <Tooltip />
        <Bar dataKey="male" fill="#8884d8" />
        <Bar dataKey="female" fill="#82ca9d" />
        <Bar dataKey="ageGroup" fill="#4a4646" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RenderBarChart;
