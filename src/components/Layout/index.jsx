import { Sidebar } from "../Sidebar";
import { Button } from "../Button";
import imgLogo from "../../assets/images/Logo.png";
import Dashboard from "../../assets/icons/DashboardItem.svg";
import AdicionarRodada from "../../assets/icons/AdicionarSumula.svg";
import AvaliarTimesUsuarios from "../../assets/icons/AvaliarTimesUsuarios.svg";
import TimesCadastrados from "../../assets/icons/AvaliarJogadoras.svg";
import RankingIcon from "../../assets/icons/Group.svg";
import ExitIcon from "../../assets/icons/Exit.svg";
import {NavLink, ContainerLayout, ContainerLogo, PageContents, ContainerNav, ExitContainer} from "./StyledLayout";
import "typeface-roboto";



const navItems = [
    {
        text: "Dashboard",
        src: Dashboard,
        to: "/",
        alt: "Icon Dashboard",
    },
    {
        text: "Adicionar Rodada",
        src: AdicionarRodada, //AdicionarSumula.svg
        to: "/rodadas",
        alt: "Icon Dashboard",
    },
    {
        text: "Times Cadastrados",
        src: TimesCadastrados, //AvaliarJogadoras.svg
        to: "/jogadoras",
        alt: "Icon Dashboard",
    },
    {
        text: "Lorem",
        src: AvaliarTimesUsuarios, //AvaliarTimesUsuarios.svg
        to: "/times",
        alt: "Icon Dashboard",
    },
    {
        text: "Ranking",
        src: RankingIcon, //Group.svg
        to: "/ranking",
        alt: "Ranking Dashboard",
    },
 ]


export const Layout = (props) => {
    const { children } = props;
    return (
        <ContainerLayout>
            <Sidebar variation="left" >
                <ContainerLogo>
                    <img src={imgLogo} alt="Logo DFF"/>
                </ContainerLogo>
                <ContainerNav>
                    {navItems.map((item, index, array) => {
                        return (
                            <NavLink to={item.to} activeClassName="actived">
                                <img src={item.src} alt={item.alt} />
                                <Button type="oulined" variation={index === array.lenght-1 ? "alert" : "secondary"} size="small">{item.text}</Button>
                            </NavLink>
                        ) 
                        })
                    }
                    <ExitContainer to="/" activeClassName="actived">
                            <img src={ExitIcon} alt=""/>
                            <Button type="outlined" variation="alert" size="small">Sair</Button>
                    </ExitContainer>
                </ContainerNav>
            </Sidebar>
            <PageContents>
                { children }
            </PageContents>
        </ContainerLayout>
    )

}



