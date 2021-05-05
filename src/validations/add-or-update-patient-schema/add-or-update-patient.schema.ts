import { number, object, string } from 'yup';

/**
 * Login form schema
 */
export const addOrUpdatePatientSchema = object({
  name: string().required('Name is required'),
  email: string().nullable().email('Invalid email'),
  description: string().required('Description is required'),
  userId: number().nullable(),
  phoneNumber: string().required('Phone number is required'),
  id: number().nullable()
});
