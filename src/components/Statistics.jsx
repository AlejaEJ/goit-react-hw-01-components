const Statistics = ({
    title,
    stats,
}) => {
    const generateRandomColor = () => {
        return `#${Math.floor(Math.random()*16777215).toString(16)}`;
      };
      
    return (
        <section className="statistics">
            {title && <h2 className="title">{title}</h2>}
            
            <ul className="stat-list">
                {stats.map(stat => (
                    <li key={stat.id} className="item" style={{ backgroundColor: generateRandomColor() }}>
                        <span className="label">{stat.label}</span>
                        <span className="percentage">{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Statistics;