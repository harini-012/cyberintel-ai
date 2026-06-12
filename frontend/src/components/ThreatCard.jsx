function ThreatCard({

  title,
  count,
  level

}) {

  return (

    <div className="threat-card">

      <h3>{title}</h3>

      <h1>{count}</h1>

      <p>{level}</p>

    </div>

  );

}

export default ThreatCard;