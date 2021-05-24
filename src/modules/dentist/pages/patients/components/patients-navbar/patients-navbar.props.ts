/**
 * Patients Navbar props
 */
type PatientsNavbarProps = {
  query: string;
  onQueryChange: (value: string) => void;
  onAddClick?: () => void;
  onDeleteClick?: () => void;
  deleteVisible?: boolean;
};

export type { PatientsNavbarProps };
