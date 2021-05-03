/**
 * Patient type
 */
export type Patient = {
  id: number;
  name: string;
  phoneNumber: string;
  email?: string;
  description?: string;
  userId?: number;
};
