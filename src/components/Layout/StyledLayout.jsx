import { NavLink as NavLinkRouter } from "react-router-dom";
import styled from "styled-components";

const NavLink = styled(NavLinkRouter)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom:15px;
    text-decoration:none; 
    button {
        color: #75F099;
        font-style: normal;
        font-weight: 900;
        font-size: 12px;
        line-height: 14px;
        align-items: center;
        text-align: center;
    }
    img {
        margin-right: 15px;
    }

    &.actived button {
        background-image: ${props => props.theme.pallete.gradient.main};
        color: black;
    }
    &.actived svg {
        fill: green;
        stroke: ${props => props.theme.pallete.gray.black};
    }
`
// Styled a div que contem o button e o icon.

const ContainerLogo = styled.div`
    img {
        width: 169px;
        height: 164px;
        margin-top: 18px;
        margin-bottom: 60px;
    }
 `
  // Esse Container recebe a logo do DFF.

  const ExitContainer = styled(NavLinkRouter)`
    display: flex;
    flex-direction: row;
    margin-top: auto;
    margin-bottom: 32px;
    text-decoration:none; 
    button {
        color: #EB4783;
        font-style: normal;
        font-weight: 900;
        font-size: 12px;
        line-height: 14px;
        line-height: 14px;
        align-items: center;
        text-align: center;
    }
    img {
        margin-right: 15px;
    }

    &.actived button {
        background-image: ${props => props.theme.pallete.gradient.alert};
        color: black;
    }
`
// esse styledé a div que contem o botão e o icon de "Sair"


 const ContainerLayout = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
 `

 // esse styled é a div que vai englobar todo o Sidebar e o conteúdo da página da page (PageContents)

const ContainerNav = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    a:last-child {
        margin-top: auto;
        margin-bottom: 18px;
    }
`

// esse styled a div que contém todos os botões (NavLink e ExitContainer) que vão receber o router.
const PageContents = styled.main`
    display: flex;
    height: 100%;
    width: 100%;
`
// esse styled contém todos os conteúdos da página.


export { NavLink, ContainerLayout, ContainerLogo, PageContents, ContainerNav, ExitContainer}