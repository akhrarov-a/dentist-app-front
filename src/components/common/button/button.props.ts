import React from 'react';

/**
 * Button Props
 */
type ButtonProps = Exclude<React.HTMLAttributes<HTMLButtonElement>, 'type'> & {
  type?: string;
  className?: string;
  /**
   * Button theme
   */
  theme?: 'primary' | 'secondary' | 'teritary';

  /**
   * Button size
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
};

export type { ButtonProps };
