import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function Charts({ stats }) {

  const data =
    Object.entries(stats).map(
      ([name,count]) => ({

        name,
        count

      })
    );

  return (

    <div
      style={{
        width:"100%",
        height:"350px"
      }}
    >

      <ResponsiveContainer>

        <BarChart data={data}>

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="count" />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

}

export default Charts;