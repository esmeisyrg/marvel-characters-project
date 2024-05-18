import styles from '../styles/ui/pagination.module.css'

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({currentPage, totalPages, onPageChange} : PaginationProps) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }
 
  return (
    <div className={styles.pagination}>
    {pages.map(page => (
        <button
        key={page}
        className={page === currentPage ? styles.active : ''}
        onClick={() => onPageChange(page)}
    >
        {page}
        </button>
    ))}

    </div>
  );
};
