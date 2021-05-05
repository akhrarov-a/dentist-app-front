import { number, object, string } from 'yup';

/**
 * Login form schema
 */
export const addOrUpdatePatientSchema = object({
  name: string().required('Name is required'),
  email: string().nullable().email('Invalid email'),
  description: string().required('Description is required'),
  userId: number().nullable(),
  phoneNumber: string()
    .required('Phone number is required')
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
      'Invalid phone number'
    ),
  id: number().nullable()
});
