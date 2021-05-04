import { AppState } from '../../../api/models/app-state';
import {
  getPatients,
  setErrors
} from '../../../redux/modules/patients/actions';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/**
 * Patients Page Props
 */
const usePatientsPage = () => {
  const dispatch = useDispatch();

  const { patients, total } = useSelector((state: AppState) => state.patients);

  const [isAdding, setIsAdding] = useState(false);
  const [selectedPage, setSelectedPage] = useState(1);
  const [query, setQuery] = useState('');

  const onQueryChange = useCallback((value: string) => {
    setQuery(value);

    if (value) return;

    setSelectedPage(1);
  }, []);

  const toggleEditingModal = useCallback(() => {
    setIsAdding(!isAdding);

    if (!isAdding) return;

    dispatch(setErrors.add());
  }, [isAdding]);

  const onPageChange = useCallback(({ selected }: { selected: number }) => {
    setSelectedPage(selected + 1);
  }, []);

  const onDeleteClick = useCallback(() => {}, []);

  useEffect(() => {
    dispatch(getPatients(selectedPage, query));
  }, [selectedPage, query]);

  return {
    patients,
    query,
    total,
    isAdding,
    onPageChange,
    onQueryChange,
    onDeleteClick,
    toggleEditingModal
  };
};

export default usePatientsPage;
