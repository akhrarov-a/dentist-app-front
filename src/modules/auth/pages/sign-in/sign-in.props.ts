import { AppState, LogIn } from '@api';
import { logIn } from '@auth';
import { loginSchema } from '@auth/validation';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

/**
 * Sign In Page Props
 */
const useSignInPage = () => {
  const dispatch = useDispatch();

  const { error } = useSelector((state: AppState) => state.auth);

  const formik = useFormik<LogIn>({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: ({ username, password }) => {
      dispatch(logIn({ username, password }));
    },
    validationSchema: loginSchema,
    validateOnChange: false
  });

  return { formik, error };
};

export { useSignInPage };
