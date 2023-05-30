import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles['transaction']}>
    <thead className={styles['transaction_thead']}>
      <tr className={styles['transaction_tr']}>
        <th className={styles['transaction_th']}>TYPE</th>
        <th className={styles['transaction_th']}>AMOUNT</th>
        <th className={styles['transaction_th']}>CURRENCY</th>
      </tr>
    </thead>

    <tbody className={styles['transaction_tbody']}>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td className={styles['transaction_td']}>{type}</td>
          <td className={styles['transaction_td']}>{amount}</td>
          <td className={styles['transaction_td']}>{currency}</td>
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