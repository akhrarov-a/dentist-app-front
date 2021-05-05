import { useMemo } from 'react';

/**
 * Use titles
 */
export const useTitles = (
  key: string
): {
  name: string;
  atCenter?: boolean;
  atEnd?: boolean;
  bold?: boolean;
}[] => {
  const titles: {
    [key: string]: {
      name: string;
      atCenter?: boolean;
      atEnd?: boolean;
      bold?: boolean;
    }[];
  } = useMemo(
    () => ({
      patients: [
        {
          name: 'Name'
        },
        {
          name: 'Email'
        },
        {
          name: 'Phone number'
        },
        {
          name: 'Description'
        },
        {
          name: 'Details',
          atCenter: true
        }
      ]
    }),
    []
  );

  return titles[key.toLowerCase() as string];
};
