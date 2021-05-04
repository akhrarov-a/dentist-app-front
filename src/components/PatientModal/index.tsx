import { Button, FormError, Input, Modal } from '../../core';
import { GrClose } from 'react-icons/all';
import { PatientModalProps } from './type';
import React from 'react';
import styles from './styles.module.scss';
import usePatientModal from './props';

/**
 * Patient Modal
 */
const PatientModal: React.FC<PatientModalProps> = ({
  onClose
}): JSX.Element => {
  const { form, update, add, selectedPatient } = usePatientModal({ onClose });

  const { name, email, phoneNumber, description } = form.values;
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
            onChange={form.handleChange}
          />
          <Input
            type={'email'}
            name={'email'}
            placeholder={'Email'}
            value={email}
            onChange={form.handleChange}
          />
        </div>
        <div>
          <Input
            type={'text'}
            name={'phoneNumber'}
            placeholder={'Phone'}
            value={phoneNumber}
            onChange={form.handleChange}
          />
          <Input
            type={'text'}
            name={'description'}
            placeholder={'Description'}
            value={description}
            onChange={form.handleChange}
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
          Submit
        </Button>
      </form>
    </Modal>
  );
};

export default PatientModal;
