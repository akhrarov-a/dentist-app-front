import {
  Body,
  Button,
  Cell,
  Head,
  Modal,
  Pagination,
  Row,
  Table
} from '../../../components/common';
import { BsInfoCircle } from 'react-icons/all';
import { Checkbox } from '../../../components/common/checkbox';
import { NavLink } from 'react-router-dom';
import { hoc } from '../../../utils/hoc';
import { usePatientsPage } from './props';
import PatientModal from '../../../components/PatientModal';
import PatientsNavbar from '../../../components/PatientsNavbar';
import React from 'react';
import styles from './style.module.scss';

/**
 * Patients Page
 */
const PatientsPage = hoc(
  usePatientsPage,
  ({
    links,
    isAdding,
    isDeleting,
    patients,
    query,
    total,
    onPageChange,
    onQueryChange,
    toggleEditingModal,
    toggleDeletingModal,
    onDeleteClick,
    selectedPatients,
    onPatientCheckboxClick,
    onAllCheckboxClick,
    selectedPage
  }) => (
    <div className={styles.container}>
      {isAdding && <PatientModal onClose={toggleEditingModal} />}
      {isDeleting && (
        <Modal className={styles['delete-modal']}>
          <h1>
            Are you sure <br />
            to delete this patient{selectedPatients?.length === 1 ? '' : 's'} ?
          </h1>
          <h3>You won't able to recover</h3>
          <div className={styles.buttons}>
            <Button
              theme={'teritary'}
              size={'md'}
              onClick={toggleDeletingModal}
            >
              Cancel
            </Button>
            <Button theme={'primary'} size={'md'} onClick={onDeleteClick}>
              Delete
            </Button>
          </div>
        </Modal>
      )}
      <PatientsNavbar
        query={query}
        onQueryChange={onQueryChange}
        onAddClick={toggleEditingModal}
        onDeleteClick={toggleDeletingModal}
        deleteVisible={!!selectedPatients?.length}
      />
      <div className={styles['patients-container']}>
        <Table>
          <Head>
            <Row className={styles.row}>
              {patients?.length ? (
                <Cell className={styles.pl}>
                  <Checkbox
                    checked={selectedPatients?.length === patients?.length}
                    onChange={onAllCheckboxClick}
                  />
                </Cell>
              ) : null}
              {links.map(({ atCenter, atEnd, name, bold }, index) => (
                <Cell key={index} atEnd={atEnd} atCenter={atCenter} bold={bold}>
                  {name}
                </Cell>
              ))}
            </Row>
          </Head>
          <Body>
            {patients?.map(
              ({ id, name, phoneNumber, email, description }, index) => (
                <Row key={index} className={styles.row}>
                  <Cell className={styles.pl}>
                    <Checkbox
                      checked={selectedPatients?.some((value) => value === id)}
                      onChange={() => onPatientCheckboxClick(id)}
                    />
                  </Cell>
                  <Cell>{name}</Cell>
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
        {!query && patients?.length === 0 ? (
          <div className={styles['no-patients']}>
            <p>You don't have patients yet</p>
          </div>
        ) : (
          ''
        )}
        {query && patients?.length === 0 ? (
          <div className={styles['no-patients']}>
            <p>No matches</p>
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
  )
);

export default PatientsPage;
