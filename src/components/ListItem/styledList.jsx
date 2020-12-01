import styled, { css } from "styled-components";

const stylingObject = {
  ranking: {
    padding: "0 40px",
    columns: "80.1% 10.8% 1fr",
  },
  player: {
    padding: "0 15px",
    columns: "4.7% 6.9% 74.5% 4.7% 1fr",
  },
  dashboard: {
    padding: "0 13px",
    columns: "7.9% 38% 5.9% 37% 7.9%",
  },
};

export const StyledListItem = styled.li.attrs((props) => ({
  ...stylingObject[props.type],
}))`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  & * {
    margin-top: auto;
    margin-bottom: auto;
  }
`;

// deals with centering item and aplying styles to the container
export const FlexContainer = styled.div.attrs((props) => ({
  ...stylingObject[props.type],
  ...props.theme.dimensions.list[props.type],
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.pallete.gray.black};
  ${(props) =>
    props.type !== "dashboard" &&
    css`
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    `};
`;
