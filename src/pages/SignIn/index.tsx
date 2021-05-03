import React from 'react';
import styles from './style.module.scss';
import useSignInPage from './props';

/**
 * Sign In Page
 */
const SignInPage: React.FC = (): JSX.Element => {
  const { formik, error } = useSignInPage();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={'/logo192.png'} alt={'Logo'} />
          <p>Stomatolog UZ</p>
        </div>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <div className={styles.controls}>
            <input
              id={'username'}
              name={'username'}
              type={'username'}
              placeholder={'Username'}
              onChange={formik.handleChange}
              value={formik.values.username}
            />
          </div>
          <div className={styles.controls}>
            <input
              id={'password'}
              name={'password'}
              type={'password'}
              placeholder={'Password'}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          {error && <p>{error}</p>}
          <div className={styles['submit-container']}>
            <button type={'submit'} className={styles['submit-button']}>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
