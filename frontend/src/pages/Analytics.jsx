import { useEffect, useState } from "react";
import axios from "axios";

import StatCard from "../components/StatCard";
import Charts from "../components/Charts";

function Analytics() {

  const [data, setData] = useState(null);

  useEffect(() => {

    fetchAnalytics();

  }, []);

  const fetchAnalytics = async () => {

    try {

      const response =
        await axios.get(
          "https://cyberintel-ai.onrender.com/analytics"
        );

      setData(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  if (!data)
    return <h2>Loading Analytics...</h2>;

  return (

    <div className="page-wrapper">

      <div className="page-header">

        <h1>Analytics Dashboard</h1>

        <p>
          Real-time platform usage metrics
        </p>

      </div>

      <div className="dashboard-grid">

        <StatCard
          title="Reports Generated"
          value={data.total_reports}
        />

        <StatCard
          title="Unique Software"
          value={
            Object.keys(
              data.software_stats
            ).length
          }
        />

      </div>

      <div className="page-card">

        <h2 className="section-title">
          Software Scan Distribution
        </h2>

        <Charts
          stats={data.software_stats}
        />

      </div>

      <div className="page-card">

        <h2 className="section-title">
          Recent Reports
        </h2>

        {data.recent_reports.map(
          (report,index)=>(
            <p key={index}>
              📄 {report}
            </p>
          )
        )}

      </div>

    </div>

  );

}

export default Analytics;
