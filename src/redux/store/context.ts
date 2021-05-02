import AuthService from '../../api/services/auth.service';

export const getContext = () => ({
  auth: new AuthService()
});

export type StoreContext = ReturnType<typeof getContext>;
