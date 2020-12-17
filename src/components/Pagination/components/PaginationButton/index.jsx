import * as C from "../../../";
import { getV } from "../../../../styles";
import { useTheme } from "styled-components";

function range(start, stop) {
  return [...Array(stop - start).keys()].map((i) => i + start);
}
export function PaginationButtons({ page, setPage, start, stop }) {
  const theme = useTheme();
  const currentPage = page + 1;

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
