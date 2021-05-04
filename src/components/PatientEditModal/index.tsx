import { Button, Modal } from '../../core';
import { PatientModalProps } from './type';
import React from 'react';
import styles from './styles.module.scss';
import usePatientEditModal from './props';

const PatientEditModal: React.FC<PatientModalProps> = ({
  onClose
}): JSX.Element => {
  const { form, update } = usePatientEditModal({ onClose });

  const { name, email, phoneNumber, description } = form.values;
  return (
    <Modal className={styles.container}>
      <p onClick={onClose}>Close</p>
      <form className={styles.form} onSubmit={form.handleSubmit}>
        <div>
          <input
            type={'text'}
            name={'name'}
            placeholder={'Name'}
            value={name}
            onChange={form.handleChange}
          />
          <input
            type={'email'}
            name={'email'}
            placeholder={'Email'}
            value={email}
            onChange={form.handleChange}
          />
        </div>
        <div>
          <input
            type={'text'}
            name={'phoneNumber'}
            placeholder={'Phone'}
            value={phoneNumber}
            onChange={form.handleChange}
          />
          <input
            type={'text'}
            name={'description'}
            placeholder={'Description'}
            value={description}
            onChange={form.handleChange}
          />
        </div>

        <p>{update}</p>
        <Button type={'submit'}>Submit</Button>
      </form>
    </Modal>
  );
};

export default PatientEditModal;
