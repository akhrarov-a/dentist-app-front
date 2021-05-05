/**
 * Patient type
 */
export type Patient = {
  id: number;
  name: string;
  phoneNumber: string;
  email?: string;
  description: string;
  userId: number;
};

/**
 * Add or Update patient
 */
export type AddOrUpdatePatient = {
  id?: number;
  name: string;
  phoneNumber: string;
  email?: string;
  description: string;
};
