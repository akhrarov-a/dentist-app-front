import { Patient } from '../../../api/models/patient/patient';
import { make } from 'redux-chill';

/**
 * Get user
 */
export const getPatients = make('[patients] get')
  .stage((selectedPage: number, search) => ({ selectedPage, search }))
  .stage('success', (payload: Patient[], total) => ({ payload, total }))
  .stage('finish');
