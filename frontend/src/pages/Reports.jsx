import { useEffect, useState } from "react";
import axios from "axios";

function Reports() {

  const [reports,setReports] =
    useState([]);

  useEffect(() => {

    loadReports();

  }, []);

  const loadReports = async () => {

    const response =
      await axios.get(
        "https://cyberintel-ai.onrender.com/reports"
      );

    setReports(
      response.data
    );

  };

  return (

    <div className="page-wrapper">

      <div className="page-header">

        <h1>Generated Reports</h1>

      </div>

      <div className="page-card">

        {reports.map(
          (report,index)=>(

            <div
              key={index}
              style={{
                marginBottom:"15px"
              }}
            >

              <a
                href={`https://cyberintel-ai.onrender.com/reports/${report}`}
                target="_blank"
                rel="noreferrer"
              >
                📄 {report}
              </a>

            </div>

          )
        )}

      </div>

    </div>

  );

}

export default Reports;
