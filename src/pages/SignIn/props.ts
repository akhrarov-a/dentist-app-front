import { AppState } from '../../api/models/app-state';
import { LogIn } from '../../api/models/log-in/log-in';
import { logIn } from '../../redux/modules/auth/actions';
import { loginSchema } from '../../validations/log-in-schema/login.schema';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

/**
 * Sign In Page Props
 */
export const useSignInPage = () => {
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
    validationSchema: loginSchema
  });

  return { formik, error };
};
