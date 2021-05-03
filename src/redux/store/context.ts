import AuthService from '../../api/services/auth.service';
import PatientsService from '../../api/services/patients.service';

export const getContext = () => ({
  auth: new AuthService(),
  patients: new PatientsService()
});

export type StoreContext = ReturnType<typeof getContext>;
