import * as C from "../";
import * as S from "../../pages/dashboard/styledPage";
import { PaginationButtons } from "./components/PaginationButton";

export const Pagination = (props) => {
  const { totalPages } = props.data;
  const { setPage, page } = props;

  const isntFirstPage = page !== 0;
  const instLastPage = page + 1 !== totalPages;
  const theresPagesLeft = page - 1 > 1;
  const theresPagesRight = page + 1 < totalPages;

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
        <PaginationButtons
          page={page}
          totalPages={totalPages}
          setPage={setPage}
        />
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
