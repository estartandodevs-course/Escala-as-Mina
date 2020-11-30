import { Sidebar } from "../Sidebar";
import { useTheme } from "styled-components";
import { Button } from "../Button";
import imgLogo from "../../assets/images/Logo.png";
import Dashboard from "../../assets/icons/Dashboard.svg";
import AdicionarRodada from "../../assets/icons/AdicionarSumula.svg";
import AvaliarTimesUsuarios from "../../assets/icons/AvaliarTimesUsuarios.svg";
import TimesCadastrados from "../../assets/icons/AvaliarJogadoras.svg";
import RankingIcon from "../../assets/icons/Group.svg";
import ExitIcon from "../../assets/icons/Exit.svg";
import { Card } from "../Card";
import {Link, NavLink, ContainerLayout, ContainerLogo, PageContents, ContainerNav, ExitContainer, SvgDashboard} from "./StyledLayout";



const navItems = [
    {
        text: "Dashboard",
        src: "dashboard",
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
        src: AvaliarTimesUsuarios,
        to: "/times",
        alt: "Icon Dashboard",
    },
    {
        text: "Ranking",
        src: RankingIcon,
        to: "/ranking",
        alt: "Ranking Dashboard",
    },
    {
        text: "Sair",
        src: ExitIcon,
        to: "/login",
        alt: "Exit Dashboard",
    },
 ]


export const Layout = () => {
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
                                <SvgDashboard src={item.src} />
                                {/* <img src={item.src} alt={item.alt} /> */}
                                <Button type="oulined" variation={index === array.lenght-1 ? "alert" : "secondary"} size="small">{item.text}</Button>
                            </NavLink>
                        ) 
                        })
                    }
                    <Button variation="active" size="small">
                        Aparece pfv
                    </Button>
                </ContainerNav>
            </Sidebar>
            <PageContents>

            </PageContents>
        </ContainerLayout>
    )

}


//tenho que pensar como vou fazer o navLink augeee


