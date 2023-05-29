import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };

  return (
    <section className={styles["statistics"]}>
      {title && <h2 className={styles["title"]}>{title}</h2>}
      <ul className={styles["stat-list"]}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={styles["item"]} style={{ backgroundColor: getRandomColor() }}>
            <span className={styles["label"]}>{label}</span>
            <span className={styles["percentage"]}> {percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Statistics;