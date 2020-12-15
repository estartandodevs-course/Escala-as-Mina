// import { useState } from "react";
import { useTheme } from "styled-components";
import { getV } from "../../styles";
import * as C from "../";
import * as S from "../../pages/dashboard/styledPage";

export const Pagination = (props) => {
  const theme = useTheme();
  const { totalPages } = props.data;
  const { setPage, page } = props;

  const isntFirstPage = page !== 0;
  const instLastPage = page + 1 !== totalPages;
  const theresPagesLeft = page - 1 > 1;
  const theresPagesRight = page + 1 < totalPages;
  console.log(props, "dentro");

  return (
    <S.GridColumnWrapper column="2fr 1fr 2fr">
      <>
        {isntFirstPage && (
          <S.FlexContainer>
            <C.Button type="icon" onClick={() => setPage(page - 1)}>
              {"<"}
            </C.Button>
            <C.Button type="icon" onClick={() => setPage(0)}>
              Primeira Página
            </C.Button>
            {theresPagesLeft && <p>...</p>}
          </S.FlexContainer>
        )}

        {!isntFirstPage && !theresPagesLeft && <div></div>}
      </>

      <C.FlexContainer>
        {getButtons(page, totalPages, theme, setPage)}
      </C.FlexContainer>
      <C.FlexContainer>
        {theresPagesRight && <p>...</p>}
        {instLastPage && (
          <>
            {page + 1 !== totalPages && (
              <C.Button type="icon" onClick={() => setPage(totalPages - 1)}>
                Última Página
              </C.Button>
            )}
            <C.Button type="icon" onClick={() => setPage(page + 1)}>
              {">"}
            </C.Button>
          </>
        )}
      </C.FlexContainer>
    </S.GridColumnWrapper>
  );
};

function range(start, stop) {
  return [...Array(stop - start).keys()].map((i) => i + start);
}
function getButtons(page, totalPages, theme, setPage) {
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
