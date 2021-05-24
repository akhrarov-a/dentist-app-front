/**
 * User Data Schema
 */
type User = {
  id: number;
  username: string;
  phoneNumber: string;
  role: string;
  name: string;
  email: string;
  avatar: string;
};

/**
 * User role
 */
enum UserRole {
  ADMIN = 'admin',
  DENTIST = 'dentist'
}

export type { User };
export { UserRole };
