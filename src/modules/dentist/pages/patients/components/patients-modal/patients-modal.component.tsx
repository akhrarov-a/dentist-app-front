import { Button, FormError, Input, Modal, hoc } from '@core';
import { GrClose } from 'react-icons/all';
import { usePatientModal } from './patients-modal.props';
import React from 'react';
import styles from './patients-modal.module.scss';

/**
 * Patient Modal
 */
const PatientModal = hoc(
  // @ts-ignore
  usePatientModal,
  ({ form, update, add, selectedPatient, onClose }) => {
    const { name, email, phoneNumber, description } = form.values;
    const { handleChange, errors } = form;
    return (
      <Modal className={styles.container}>
        <div className={styles.header}>
          <h1>{selectedPatient ? 'Edit' : 'Add'} Patient</h1>
          <GrClose className={styles.icon} onClick={onClose} />
        </div>
        <form className={styles.form} onSubmit={form.handleSubmit}>
          <div className={styles.group}>
            <Input
              type={'text'}
              name={'name'}
              label={'Name'}
              value={name}
              onChange={handleChange}
              error={errors.name}
            />
            <Input
              type={'email'}
              name={'email'}
              label={'Email'}
              value={email}
              onChange={handleChange}
              error={errors.email}
            />
          </div>
          <div className={styles.group}>
            <Input
              type={'text'}
              name={'phoneNumber'}
              label={'Phone'}
              value={phoneNumber}
              onChange={handleChange}
              error={errors.phoneNumber}
            />
            <Input
              type={'text'}
              name={'description'}
              label={'Description'}
              value={description}
              onChange={handleChange}
              error={errors.description}
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

export { PatientModal };
