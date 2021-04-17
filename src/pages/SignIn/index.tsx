import React from 'react';
import styles from './style.module.scss';
import useSignInPage from './props';

/**
 * Sign In Page
 */
const SignInPage: React.FC = (): JSX.Element => {
  const { onLogIn } = useSignInPage();

  return (
    <div>
      <p onClick={onLogIn}>Sign In Page</p>
    </div>
  );
};

export default SignInPage;
