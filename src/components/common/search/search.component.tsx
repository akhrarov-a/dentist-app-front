import { FiSearch } from 'react-icons/all';
import { SearchProps } from './search.props';
import React from 'react';
import classNames from 'classnames';
import styles from './search.module.scss';

/**
 * Renders Search
 */
const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  className,
  placeholder
}): JSX.Element => (
  <div className={classNames(styles.search, className)}>
    <input
      type='text'
      className={styles.field}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
    <button className={styles.button}>
      <FiSearch className={styles.icon} />
    </button>
  </div>
);

export { Search };
