import { Button, FormError, Input, Modal } from '../common';
import { GrClose } from 'react-icons/all';
import { hoc } from '../../utils/hoc';
import React from 'react';
import styles from './styles.module.scss';
import usePatientModal from './props';

/**
 * Patient Modal
 */
const PatientModal = hoc(
  // @ts-ignore
  usePatientModal,
  ({ form, update, add, selectedPatient, onClose }) => {
    const { name, email, phoneNumber, description } = form.values;
    const { handleChange } = form;
    return (
      <Modal className={styles.container}>
        <div className={styles.header}>
          <h1>{selectedPatient ? 'Edit' : 'Add'} Patient</h1>
          <GrClose className={styles.icon} onClick={onClose} />
        </div>
        <form className={styles.form} onSubmit={form.handleSubmit}>
          <div>
            <Input
              type={'text'}
              name={'name'}
              placeholder={'Name'}
              value={name}
              onChange={handleChange}
            />
            <Input
              type={'email'}
              name={'email'}
              placeholder={'Email'}
              value={email}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              type={'text'}
              name={'phoneNumber'}
              placeholder={'Phone'}
              value={phoneNumber}
              onChange={handleChange}
            />
            <Input
              type={'text'}
              name={'description'}
              placeholder={'Description'}
              value={description}
              onChange={handleChange}
            />
          </div>

          <FormError text={update} />
          <FormError text={add} />

          <Button
            theme={'primary'}
            size={'md'}
            className={styles.button}
            type={'submit'}
            style={{ marginTop: update || add ? '20px' : '40px' }}
          >
            {selectedPatient ? 'Edit' : 'Add'}
          </Button>
        </form>
      </Modal>
    );
  }
);

export default PatientModal;
