import { Body, Cell, Head, Pagination, Row, Table } from '../../core';
import { BsInfoCircle } from 'react-icons/all';
import PatientsNavbar from '../../components/PatientsNavbar';
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
              <Cell />
            </Row>
          </Head>
          <Body>
            {patients?.map(
              ({ name, phoneNumber, email, description }, index) => (
                <Row key={index} className={styles.row}>
                  <Cell className={styles.pl}>{name}</Cell>
                  <Cell>{email}</Cell>
                  <Cell>{phoneNumber}</Cell>
                  <Cell>{description?.substr(0, 14)}</Cell>
                  <Cell>
                    <BsInfoCircle className={styles.iconInfo} />
                  </Cell>
                </Row>
              )
            )}
          </Body>
        </Table>
      </div>
      {!query && <Pagination length={total} onPageChange={onPageChange} />}
    </div>
  );
};

export default PatientsPage;
