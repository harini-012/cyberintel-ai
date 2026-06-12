function StatCard({ title, value, color }) {
  return (
    <div
      className="stat-card"
      style={
        color
          ? { background: color }
          : {}
      }
    >
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}

export default StatCard;