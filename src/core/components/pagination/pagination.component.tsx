import { PaginationProps } from './pagination.props';
import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';

/**
 * Renders Modal
 */
const Pagination: React.FC<PaginationProps> = ({ length, onPageChange }) => (
  <ReactPaginate
    containerClassName={styles.container}
    activeLinkClassName={styles['page--true']}
    pageLinkClassName={styles.page}
    previousLinkClassName={styles['buttons--link']}
    previousClassName={styles.buttons}
    nextClassName={styles.buttons}
    nextLinkClassName={styles['buttons--link']}
    disabledClassName={styles['buttons--disabled']}
    pageCount={length}
    onPageChange={onPageChange}
    marginPagesDisplayed={4}
    pageRangeDisplayed={4}
    breakLinkClassName={styles.page}
  />
);
export { Pagination };
