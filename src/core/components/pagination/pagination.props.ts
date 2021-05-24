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

  /**
   * Selected page
   */
  selectedPage: number;
};

export type { PaginationProps };
