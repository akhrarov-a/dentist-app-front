import { Patient } from '../../../api/models/patient/patient';
import { make } from 'redux-chill';

/**
 * Get patients
 */
export const getPatients = make('[patients] get')
  .stage((selectedPage: number, search) => ({ selectedPage, search }))
  .stage('success', (payload: Patient[], total) => ({ payload, total }))
  .stage('finish');

/**
 * Get patient by id
 */
export const getPatientById = make('[patients] get by id')
  .stage((id: number) => ({ id }))
  .stage('success', (payload: Patient) => payload);

/**
 * Delete patient by id
 */
export const deletePatientById = make('[patients] delete by id')
  .stage((id: number, callback: () => void) => ({ id, callback }))
  .stage('success');
