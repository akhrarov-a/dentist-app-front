/**
 * Sidebar Links
 */
export const useSidebarLinks = (): {
  name: string;
  iconKey: string;
  to: string;
}[] => [
  {
    name: 'Dashboard',
    iconKey: 'MdDashboard',
    to: '/dashboard'
  },
  {
    name: 'Appointments',
    iconKey: 'MdEvent',
    to: '/appointments'
  },
  {
    name: 'Patients',
    iconKey: 'IoPersonOutline',
    to: '/patients'
  }
];
