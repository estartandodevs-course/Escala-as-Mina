import * as C from "../../../";
import { getV } from "../../../../styles";
import { useTheme } from "styled-components";

function range(start, stop) {
  return [...Array(stop - start).keys()].map((i) => i + start);
}
export function PaginationButtons({ page, totalPages, setPage }) {
  const theme = useTheme();
  const currentPage = page + 1;
  let start = 0;
  let stop = 0;

  if (page === 0) {
    start = 0;
    stop = totalPages <= 3 ? totalPages : 3;
  } else if (currentPage === totalPages) {
    start = totalPages === 2 ? -1 : -2;
    stop = 1;
  } else {
    start = totalPages === 2 ? 0 : -1;
    stop = 2;
  }
  const constructorArray = range(start, stop);

  return constructorArray.map((item, index) => {
    return (
      <C.Button
        key={index}
        size={getV("32px", "h")}
        type="icon"
        variation={item === 0 ? "secondary" : "search"}
        rounded
        onClick={() => setPage(item + page)}
      >
        <C.Typography
          color={
            item === 0 ? theme.pallete.gray.black : theme.pallete.secondary.main
          }
        >
          {item + currentPage}
        </C.Typography>
      </C.Button>
    );
  });
}
