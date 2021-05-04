import { Body, Cell, Head, Pagination, Row, Table } from '../../../core';
import { BsInfoCircle } from 'react-icons/all';
import { NavLink } from 'react-router-dom';
import PatientModal from '../../../components/PatientModal';
import PatientsNavbar from '../../../components/PatientsNavbar';
import React from 'react';
import styles from './style.module.scss';
import usePatientsPage from './props';

/**
 * Patients Page
 */
const PatientsPage: React.FC = (): JSX.Element => {
  const {
    isAdding,
    patients,
    query,
    total,
    onPageChange,
    onQueryChange,
    toggleEditingModal,
    onDeleteClick,
    selectedPatients,
    onPatientCheckboxClick,
    onAllCheckboxClick,
    selectedPage
  } = usePatientsPage();

  return (
    <div className={styles.container}>
      {isAdding && <PatientModal onClose={toggleEditingModal} />}
      <PatientsNavbar
        query={query}
        onQueryChange={onQueryChange}
        onAddClick={toggleEditingModal}
        onDeleteClick={onDeleteClick}
        deleteVisible={!!selectedPatients?.length}
      />
      <div className={styles['patients-container']}>
        <Table>
          <Head>
            <Row className={styles.row}>
              {patients?.length ? (
                <Cell>
                  <input
                    type={'checkbox'}
                    checked={selectedPatients?.length === patients?.length}
                    onChange={onAllCheckboxClick}
                  />
                </Cell>
              ) : null}
              <Cell className={styles.pl}>Name</Cell>
              <Cell>Email</Cell>
              <Cell>Phone number</Cell>
              <Cell>Description</Cell>
              <Cell atCenter>Details</Cell>
            </Row>
          </Head>
          <Body>
            {patients?.map(
              ({ id, name, phoneNumber, email, description }, index) => (
                <Row key={index} className={styles.row}>
                  <Cell>
                    <input
                      type={'checkbox'}
                      checked={selectedPatients?.some((value) => value === id)}
                      onChange={() => onPatientCheckboxClick(id)}
                    />
                  </Cell>
                  <Cell className={styles.pl}>{name}</Cell>
                  <Cell>{email}</Cell>
                  <Cell>{phoneNumber}</Cell>
                  <Cell>{description?.substr(0, 14)}</Cell>
                  <Cell atCenter>
                    <NavLink to={`/patients/${id}`}>
                      <BsInfoCircle className={styles.iconInfo} />
                    </NavLink>
                  </Cell>
                </Row>
              )
            )}
          </Body>
        </Table>
        {patients?.length === 0 ? (
          <div className={styles['no-patients']}>
            <p>You don't have patients yet</p>
          </div>
        ) : (
          ''
        )}
      </div>
      {!query && patients?.length !== 0 && (
        <Pagination
          length={total}
          onPageChange={onPageChange}
          selectedPage={selectedPage - 1}
        />
      )}
    </div>
  );
};

export default PatientsPage;
