import { CellProps } from './cell.props';
import { HeadContext } from '../head/head.context';
import React, { useContext } from 'react';
import classNames from 'classnames';
import styles from './cell.module.scss';

/**
 * Renders Cell
 */
const Cell: React.FC<CellProps> = ({
  className,
  children,
  bold,
  atEnd,
  atCenter,
  ...props
}): JSX.Element => {
  const isHead = useContext(HeadContext);

  return React.createElement(isHead ? 'th' : 'td', {
    children,
    className: classNames(
      styles.cell,
      className,
      `
      ${atEnd ? styles.cellAtEnd : ''} 
      ${isHead ? styles.cellHead : ''} 
      ${bold ? styles.cellBold : ''} 
      ${atCenter ? styles.cellAtCenter : ''}
      `
    ),
    ...props
  });
};

export { Cell };
