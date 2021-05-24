/**
 * Sidebar Links
 */
export const useSidebarLinks = (): {
  name: string;
  iconKey: string;
  to: string;
  dentist?: boolean;
  admin?: boolean;
}[] => [
  {
    name: 'Dashboard',
    iconKey: 'MdDashboard',
    to: '/dashboard',
    dentist: true,
    admin: true
  },
  {
    name: 'Appointments',
    iconKey: 'MdEvent',
    to: '/appointments',
    dentist: true,
    admin: false
  },
  {
    name: 'Patients',
    iconKey: 'IoPersonOutline',
    to: '/patients',
    dentist: true,
    admin: false
  },
  {
    name: 'Users',
    iconKey: 'IoPersonOutline',
    to: '/users',
    dentist: false,
    admin: true
  }
];
