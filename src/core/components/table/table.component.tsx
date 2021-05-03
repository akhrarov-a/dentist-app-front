import { TableContext } from './table.context';
import { TableProps } from './table.props';
import React from 'react';
import styles from './table.module.scss';

/**
 * Renders Grid
 */
const Table: React.FC<TableProps> = ({ children, onSort }) => (
  <TableContext.Provider
    value={{
      onSort: () => {
        if (!onSort) return;

        onSort();
      }
    }}
  >
    <table className={styles.table}>{children}</table>
  </TableContext.Provider>
);

export { Table };
