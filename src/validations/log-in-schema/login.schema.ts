import { object, string } from 'yup';

/**
 * Login form schema
 */
const loginSchema = () =>
  object({
    username: string().required('Email is required'),
    password: string().required('Password is required')
  });

export { loginSchema };
