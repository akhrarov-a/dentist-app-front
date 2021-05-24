import { AuthService, PatientsService } from '@api';

const getContext = () => ({
  auth: new AuthService(),
  patients: new PatientsService()
});

type StoreContext = ReturnType<typeof getContext>;

export type { StoreContext };
export { getContext };
