import { logIn } from '../../redux/modules/auth/actions';
import { useDispatch } from 'react-redux';

/**
 * Sign In Page Props
 */
const useSignInPage = () => {
  const dispatch = useDispatch();

  const onLogIn = () => {
    dispatch(logIn({ username: 'akhrarov', password: '12345678' }));
  };

  return { onLogIn };
};

export default useSignInPage;
