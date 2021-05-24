/**
 * Add or Update patient
 */
type AddOrUpdatePatient = {
  id?: number;
  name: string;
  phoneNumber: string;
  email?: string;
  description: string;
  userId?: number;
};

export type { AddOrUpdatePatient };
