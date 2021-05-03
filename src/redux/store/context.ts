import { createBrowserHistory } from 'history';
import AuthService from '../../api/services/auth.service';
import PatientsService from '../../api/services/patients.service';

export const getContext = () => ({
  history: createBrowserHistory(),
  auth: new AuthService(),
  patients: new PatientsService()
});

export type StoreContext = ReturnType<typeof getContext>;
