import { IPaginationProps } from "../../interfaces";
import styles from "./styles.module.css";

interface Props {
  totalPages: number;
  handlerNextPage: () => void;
  handlerPreviousPage: () => void;
  handlerPageClick: (page: number) => void;
  currentPage: number;
}

const Pagination = ({
  totalPages,
  handlerNextPage,
  handlerPreviousPage,
  handlerPageClick,
  currentPage,
}: IPaginationProps) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage <= 1}
        onClick={handlerPreviousPage}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlerPageClick(index + 1)}
              key={index}
              className={styles.pageNumber}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button disabled={currentPage >= totalPages} onClick={handlerNextPage} className={styles.arrow}>
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
