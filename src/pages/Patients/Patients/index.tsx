import { Body, Cell, Head, Pagination, Row, Table } from '../../../core';
import { BsInfoCircle } from 'react-icons/all';
import { NavLink } from 'react-router-dom';
import PatientsNavbar from '../../../components/PatientsNavbar';
import React from 'react';
import styles from './style.module.scss';
import usePatientsPage from './props';

/**
 * Patients Page
 */
const PatientsPage: React.FC = (): JSX.Element => {
  const {
    patients,
    query,
    total,
    onPageChange,
    onQueryChange
  } = usePatientsPage();

  return (
    <div className={styles.container}>
      <PatientsNavbar query={query} onQueryChange={onQueryChange} />
      <div className={styles['patients-container']}>
        <Table>
          <Head>
            <Row className={styles.row}>
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
        <Pagination length={total} onPageChange={onPageChange} />
      )}
    </div>
  );
};

export default PatientsPage;
