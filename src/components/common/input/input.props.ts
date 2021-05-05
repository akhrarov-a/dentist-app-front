/**
 * Input Props
 */
interface InputProps {
  /**
   * Classname
   */
  className?: string;

  /**
   * Label
   */
  label?: string;

  /**
   * Type
   */
  type?: 'text' | 'number' | 'password' | 'email';

  /**
   * Name
   */
  name?: string;

  /**
   * Value
   */
  value?: string;

  /**
   * Placeholder
   */
  placeholder?: string;

  /**
   * On change
   */
  onChange: (value: any) => void;

  /**
   * Error
   */
  error?: boolean;
}

export type { InputProps };
