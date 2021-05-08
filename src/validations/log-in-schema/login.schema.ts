import { object, string } from 'yup';

/**
 * Login form schema
 */
export const loginSchema = object({
  username: string().required('Username is required'),
  password: string().required('Password is required')
});
