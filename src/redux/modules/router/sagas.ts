import { Payload, Saga } from 'redux-chill';
import { StoreContext } from '../../store/context';
import { navigate } from './actions';

/**
 * Router Saga
 */
class RouterSaga {
  /**
   * Get patients
   */
  @Saga(navigate)
  public *getUser(route: Payload<typeof navigate>, { history }: StoreContext) {
    history.push(route);
  }
}

export default RouterSaga;
