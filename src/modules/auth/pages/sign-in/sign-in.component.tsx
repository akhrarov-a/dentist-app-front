import { Input, hoc } from '@core';
import { useSignInPage } from './sign-in.props';
import React from 'react';
import styles from './sign-in.module.scss';

/**
 * Sign In Page
 */
const SignInPage = hoc(useSignInPage, ({ formik, error }) => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.logo}>
        <img src={'/logo.png'} alt={'Logo'} />
        <p>Stomatolog UZ</p>
      </div>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.controls}>
          <Input
            name={'username'}
            type={'text'}
            label={'Username'}
            onChange={formik.handleChange}
            value={formik.values.username}
            error={formik.errors.username}
          />
        </div>
        <div className={styles.controls}>
          <Input
            name={'password'}
            type={'password'}
            label={'Password'}
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.errors.password}
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
));

export { SignInPage };
