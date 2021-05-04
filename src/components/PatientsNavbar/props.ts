/**
 * Patients Navbar props
 */
export type PatientsNavbarProps = {
  query: string;
  onQueryChange: (value: string) => void;
  onAddClick?: () => void;
  onDeleteClick?: () => void;
  deleteVisible?: boolean;
};
