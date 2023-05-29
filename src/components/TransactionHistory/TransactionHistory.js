import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles['transaction']}>
    <thead className={styles['transaction-thead']}>
      <tr className={styles['transaction-tr']}>
        <th className={styles['transaction-th']}>TYPE</th>
        <th className={styles['transaction-th']}>AMOUNT</th>
        <th className={styles['transaction-th']}>CURRENCY</th>
      </tr>
    </thead>

    <tbody className={styles['transaction-tbody']}>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td className={styles['transaction-td']}>{type}</td>
          <td className={styles['transaction-td']}>{amount}</td>
          <td className={styles['transaction-td']}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;