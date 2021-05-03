import React from 'react';
import usePatientEditModal from './props';

const PatientEditModal = () => {
  const { form } = usePatientEditModal();

  const { name, email, phoneNumber, description } = form.values;
  return (
    <div>
      <form onSubmit={form.handleSubmit}>
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
      </form>
    </div>
  );
};

export default PatientEditModal;
