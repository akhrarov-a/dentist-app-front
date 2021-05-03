/**
 * Pagination Props
 */
type PaginationProps = {
  /**
   * Pagination length
   */
  length: number;

  /**
   * On page number click
   */
  onPageChange: (page: { selected: number }) => void;
};

export type { PaginationProps };
