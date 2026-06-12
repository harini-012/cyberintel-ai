function CVETable({ cves = [] }) {
  return (
    <div className="panel">

      <h2 className="section-title">
        Vulnerability Intelligence
      </h2>

      <table className="cve-table">

        <thead>
          <tr>
            <th>CVE ID</th>
            <th>Severity</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>

          {cves.length > 0 ? (

            cves.map((cve, index) => (
              <tr key={index}>
                <td>{cve.id}</td>
                <td>{cve.severity}</td>
                <td>{cve.description}</td>
              </tr>
            ))

          ) : (

            <tr>
              <td colSpan="3">
                No vulnerability data available
              </td>
            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}

export default CVETable;