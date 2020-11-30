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
import { Card } from "../Card"
// Estou usando algumas tamanhos do figma e outros estou fazendo de olho pois não tem. Precisamos decidir o que fazer sobre a resposividade.

const Link = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    justify-content: space-evenly;
    height: 239px;
`
//styled da div que contém os NavLink agrupados.
const NavLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img {
        margin-right: 15px;
    }
`
// Styled a div que contem o button e o icon.
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

const ExitContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: auto;
    margin-bottom: 32px;
    img {
        margin-right: 15px;
    }
`
// esse styled é a div que contem o botão e o icon de "Sair"


const ContainerNav = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

// esse styled a div que contém todos os botões (NavLink e ExitContainer) que vão receber o router.

const PageContents = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background: #f00;
`
// essa parte precisa ficar em row com o sidebar e não em cima dele e 100% da tela a partir do sidebar



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
            <PageContents>
                <Card></Card>
            </PageContents>
        </ContainerLayout>
    )

}


//tenho que pensar como vou fazer o navLink augeee
// preciso colocar o ExitContainer no fim do ContainerNav e arrumar um jeito para o Sidebar e o PageContents fique em row, sem ficar em cima do outro, e o PageContents pegar 100% da tela a partir do Sidebar

// // const navItems = [
//     {
//         text: "Dashboard",
//         src: dashboard
//     },
//     {
//         text: "Adicionar Rodada",
//         src: sumula
//     },
//     {
//         text: "Times Cadastrados",
//         src: jogadoras
//     },
//     {
//         text: "Lorem ipsum",
//         src: times
//     },
//     {
//         text: "Lorem ipsum",
//         src: group
//     }
// ]