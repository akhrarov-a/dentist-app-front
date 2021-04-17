import { logIn } from '../../redux/modules/auth/actions';
import { loginSchema } from '../../validations/log-in-schema/login.schema';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

/**
 * Sign In Page Props
 */
const useSignInPage = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: ({ username, password }) => {
      dispatch(logIn({ username, password }));
    },
    validationSchema: loginSchema
  });

  return { formik };
};

export default useSignInPage;
