import { ThemeProvider } from "styled-components";
import { Sidebar } from "../Sidebar";
import { useTheme } from "styled-components";
import { Button } from "../Button";
import styled from "styled-components";
import imgLogo from "../../assets/images/Logo.png";
import Dashboard from "../../assets/icons/Group-2.svg";
import AdicionarRodada from "../../assets/icons/AdicionarSumula.svg";
import AvaliarTimesUsuarios from "../../assets/icons/AvaliarTimesUsuarios.svg";
import TimesCadastrados from "../../assets/icons/AvaliarJogadoras.svg";
import UnsetIcon from "../../assets/icons/Group.svg";
import ExitIcon from "../../assets/icons/Exit.svg";
// Estou usando algumas tamanhos do figma e outros estou fazendo de olho pois não tem. Precisamos decidir o que fazer sobre a resposividade.

const Link = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    justify-content: space-evenly;
    height: 239px;
`
const NavLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img {
        margin-right: 12px;
    }
`

// verificar o margin-right acima.

const ContainerLogo = styled.div`
    img {
        width: 169px;
        height: 164px;
        margin-top: 18px;
        margin-bottom: 60px;
    }
 `
  // verificar as margins da logo e o tamanho. Foi usado o mesmo do figma para o tamanho e as magins estão no olho.

 const ContainerLayout = styled.div`
    display: flex;
    flex-direction: row;

 `

const ExitContainer = styled.div`
    display: flex;
    flex-direction: row;
    img {
        margin-right: 12px;
    }
`

const ContainerNav = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

 // esse styled é a div que vai englobar o sidebar e o container da page (containerpage)

export const Layout = () => {
    return (
        <ContainerLayout>
            <Sidebar variation="left" >
                <ContainerLogo>
                    <img src={imgLogo} alt="Logo DFF"/>
                </ContainerLogo>
                <ContainerNav>
                    <Link>
                        <NavLink>
                            <img src={Dashboard} alt="Icon Dashboard"/>
                            <Button type="oulined" variation="secondary" size="small"> Dashboard</Button>
                        </NavLink>
                        <NavLink>
                            <img src={AdicionarRodada} alt="Icon Adicionar Rodada"/>
                            <Button type="oulined" variation="secondary" size="small">Adicionar Rodada</Button>
                        </NavLink>
                        <NavLink>
                            <img src={TimesCadastrados} alt="Icon Times Cadastrados"/>
                            <Button type="oulined" variation="secondary" size="small">Times Cadastrados</Button>
                        </NavLink>
                        <NavLink>
                            <img src={AvaliarTimesUsuarios} alt=""/>
                            <Button type="oulined" variation="secondary" size="small">Lorem ipsum</Button>
                        </NavLink>
                        <NavLink>
                            <img src={UnsetIcon} alt=""/>
                            <Button type="oulined" variation="secondary" size="small">Lorem ipsum</Button>
                        </NavLink>
                    </Link>
                    <ExitContainer>
                            <img src={ExitIcon} alt=""/>
                            <Button type="outlined" variation="alert" size="small">Lorem ipsum</Button>
                    </ExitContainer>
                </ContainerNav>

            </Sidebar>
        </ContainerLayout>
    )

}


//tenho que pensar como vou fazer o navLink augeee