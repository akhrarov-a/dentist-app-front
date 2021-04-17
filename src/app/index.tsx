import React from 'react';
import styles from './style.module.scss';
import useApp from './props';

/**
 * App
 */
const App = () => {
  const {} = useApp();

  return (
    <div className={styles.container}>
      <p>Dentist App Front</p>
    </div>
  );
};

export default App;
