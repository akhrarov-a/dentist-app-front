import { createContext } from 'react';

/**
 * Table context
 */
const TableContext = createContext<{ onSort: () => any }>({
  onSort: () => {}
});

export { TableContext };
