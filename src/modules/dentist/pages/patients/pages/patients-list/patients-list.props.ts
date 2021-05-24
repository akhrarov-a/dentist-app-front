import { AppState } from '@api';
import { deletePatientById, getPatients, setErrors } from '../../store/actions';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTitles } from '@core';

/**
 * Patients List Page Props
 */
const usePatientsListPagePage = () => {
  const dispatch = useDispatch();

  const { patients, total } = useSelector((state: AppState) => state.patients);

  const links = useTitles('patients');

  const [isAdding, setIsAdding] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedPage, setSelectedPage] = useState(1);
  const [query, setQuery] = useState('');
  const [selectedPatients, setSelectedPatients] = useState<number[]>([]);

  const onQueryChange = useCallback((value: string) => {
    setQuery(value);
  }, []);

  const toggleEditingModal = useCallback(() => {
    setIsAdding(!isAdding);

    if (!isAdding) return;

    dispatch(setErrors.add());
  }, [isAdding]);

  const toggleDeletingModal = useCallback(() => {
    setIsDeleting(!isDeleting);
  }, [isDeleting]);

  const onPageChange = useCallback(({ selected }: { selected: number }) => {
    setSelectedPage(selected + 1);
  }, []);

  const onDeleteClick = useCallback(() => {
    selectedPatients.map((value) => {
      dispatch(
        deletePatientById(value, () => {
          dispatch(getPatients(1, ''));
        })
      );
    });

    setIsDeleting(false);
    setSelectedPage(1);
    setSelectedPatients([]);
  }, [selectedPatients]);

  const onPatientCheckboxClick = useCallback(
    (id: number | undefined) => {
      if (!id) return;

      if (selectedPatients.includes(id)) {
        setSelectedPatients(selectedPatients.filter((value) => value !== id));

        return;
      }

      setSelectedPatients([...selectedPatients, id]);
    },
    [selectedPatients]
  );

  const onAllCheckboxClick = useCallback(() => {
    const data: any = patients?.map(({ id }) => id);

    if (selectedPatients?.length === patients?.length) {
      setSelectedPatients([]);
    } else if (!!selectedPatients?.length) {
      setSelectedPatients(data);
    } else {
      setSelectedPatients(data);
    }
  }, [selectedPatients, patients]);

  useEffect(() => {
    dispatch(getPatients(selectedPage, query));
  }, [selectedPage, query]);

  return {
    links,
    patients,
    query,
    total,
    isAdding,
    isDeleting,
    onPageChange,
    onQueryChange,
    onDeleteClick,
    toggleEditingModal,
    toggleDeletingModal,
    selectedPatients,
    onPatientCheckboxClick,
    onAllCheckboxClick,
    selectedPage
  };
};

export { usePatientsListPagePage };
