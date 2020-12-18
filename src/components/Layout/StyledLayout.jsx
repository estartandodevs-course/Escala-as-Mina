import { NavLink as NavLinkRouter } from "react-router-dom";
import styled from "styled-components";
import { getV } from "../../styles";

const NavLink = styled(NavLinkRouter)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  text-decoration: none;

  @media (max-width: 1400px) {
    margin-left: 25px;
    margin-right: 25px;
  }
  button {
    color: ${(props) => props.theme.pallete.secondary.main};
    font-style: normal;
    font-weight: 900;
    font-size: 12px;
    line-height: 14px;
    align-items: center;
    text-align: center;

    @media (max-width: 1400px) {
      width: 77px;
      height: 22px;
      font-size: 7px;
      margin-right: auto;
    }

    @media (max-width: 800px) {
      display: none;
    }
  }

  img {
    margin-right: 15px;
    @media (max-width: 800px) {
      align-item: center;
      margin: auto;
    }
  }

  &.actived button {
    background-image: ${(props) => props.theme.pallete.gradient.main};
    color: black;
  }
  &.actived svg {
    fill: green;
    stroke: ${(props) => props.theme.pallete.gray.black};
  }
`;
// Styled a div que contem o button e o icon.

const ContainerLogo = styled.div`
  img {
    width: 169px;
    height: 164px;
    margin-top: 18px;
    margin-bottom: 60px;

    @media (max-width: 1400px) {
      width: 129px;
      height: 124px;
      margin-top: 18px;
    }

    @media (max-width: 800px) {
      width: 39px;
      height: 34px;
      margin-top: 18px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
// Esse Container recebe a logo do DFF.

const ExitContainer = styled(NavLinkRouter)`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  margin-bottom: 32px;
  text-decoration: none;

  @media (max-width: 1400px) {
    margin: auto;
  }

  button {
    color: ${(props) => props.theme.pallete.alert.main};
    font-style: normal;
    font-weight: 900;
    font-size: 12px;
    line-height: 14px;
    line-height: 14px;
    align-items: center;
    text-align: center;

    @media (max-width: 1400px) {
      width: 110px;
      height: 22px;
      font-size: 10px;
    }

    @media (max-width: 800px) {
      display: none;
    }
  }
  img {
    margin-right: 15px;

    @media (max-width: 1400px) {
      margin-right: 5px;
      width: 17.55px;
      height: 20.08px;
    }
  }

  &.actived button {
    background-image: ${(props) => props.theme.pallete.gradient.alert};
    color: ${(props) => props.theme.pallete.gray.black};
  }
`;
// esse styled é a div que contem o botão e o icon de "Sair"

const ContainerLayout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

// esse styled é a div que vai englobar todo o Sidebar e o conteúdo da página da page (PageContents)

const ContainerNav = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  a:last-child {
    margin-top: auto;
    margin-bottom: 18px;
  }
`;

// esse styled a div que contém todos os botões (NavLink e ExitContainer) que vão receber o router.
const PageContents = styled.main`
  display: flex;
  height: 100%;
  width: 100%;
  padding: ${getV("60px", "h")} ${getV("60px", "w")};
`;
// esse styled contém todos os conteúdos da página.

export {
  NavLink,
  ContainerLayout,
  ContainerLogo,
  PageContents,
  ContainerNav,
  ExitContainer,
};
