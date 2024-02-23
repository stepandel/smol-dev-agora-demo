import React from 'react';
import styles from '../styles/Pagination.module.css';

interface PaginationProps {
  delegatesPerPage: number;
  totalDelegates: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ delegatesPerPage, totalDelegates, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDelegates / delegatesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav id="pagination">
      <ul className={styles.pagination}>
        {pageNumbers.map(number => (
          <li key={number} className={styles.pageItem}>
            <a onClick={() => paginate(number)} href='!#' className={styles.pageLink}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;