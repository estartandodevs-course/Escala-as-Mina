import { NavLink as NavLinkRouter } from "react-router-dom";
import styled from "styled-components";

const Svg = (props) => {
    const objectTest = {bla: `<svg width="27,17" height="32" viewBox="0 0 29 34" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.1674 28.0769V5.92308C28.1674 3.20414 26.647 1 24.7714 1H4.39593C2.52041 1 1.00001 3.20414 1.00001 5.92308V28.0769C1.00001 30.7959 2.52041 33 4.39593 33H24.7714C26.647 33 28.1674 30.7959 28.1674 28.0769Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1877 25.6154V8.38463C11.1877 7.02516 10.4275 5.9231 9.48978 5.9231H6.09387C5.15611 5.9231 4.39591 7.02516 4.39591 8.38463V25.6154C4.39591 26.9749 5.15611 28.0769 6.09387 28.0769H9.48978C10.4275 28.0769 11.1877 26.9749 11.1877 25.6154Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.7715 10.8462V8.38463C24.7715 7.02516 24.0113 5.9231 23.0735 5.9231H16.2817C15.3439 5.9231 14.5837 7.02516 14.5837 8.38463V10.8462C14.5837 12.2056 15.3439 13.3077 16.2817 13.3077H23.0735C24.0113 13.3077 24.7715 12.2056 24.7715 10.8462V10.8462Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.7715 25.6154V20.6923C24.7715 19.3328 24.0113 18.2308 23.0735 18.2308H16.2817C15.3439 18.2308 14.5837 19.3328 14.5837 20.6923V25.6154C14.5837 26.9749 15.3439 28.0769 16.2817 28.0769H23.0735C24.0113 28.0769 24.7715 26.9749 24.7715 25.6154Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`}
        return (
            objectTest["bla"]
    )
}

//styled da div que contém os NavLink agrupados.
const NavLink = styled(NavLinkRouter)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom:15px;
    img {
        margin-right: 15px;
    }

    &.actived button {
        background-image: ${props => props.theme.pallete.gradient.main};
    }
    &.actived svg {
        fill: green;
        stroke: ${props => props.theme.pallete.gray.black};
    }
`
// Styled a div que contem o button e o icon.

//Os Links de navegação podem ser preenchidos ou vazados. 

//Quando  não selecionados e em estado de hover, ficam preenchidos com a cor #75F099

//Quando selecionados e em hover possuem o gradiente: a transição de (270deg, #1BE6D1 0%, #75F099 100%);  
//para gradient(90deg, #0AC2AF 0%, #0DF250 100%);


// verificar o margin-right acima.
const ContainerLogo = styled.div`
    img {
        width: 169px;
        height: 164px;
        margin-top: 18px;
        margin-bottom: 60px;
    }
 `

  // Esse Container recebe a logo do DFF.
  // verificar as margins da logo e o tamanho. Foi usado o mesmo do figma para o tamanho e as magins estão no olho.
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
// essa parte precisa ficar em row com o sidebar e não em cima dele e 100% da tela a partir do sidebar


export { NavLink, ContainerLayout, ContainerLogo, PageContents, ContainerNav, Svg}