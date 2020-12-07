import { Sidebar, Button } from "../";
import imgLogo from "../../assets/images/Logo.png";
import Dashboard from "../../assets/icons/DashboardItem.svg";
import AdicionarRodada from "../../assets/icons/AdicionarSumula.svg";
// import AvaliarTimesUsuarios from "../../assets/icons/AvaliarTimesUsuarios.svg";
import TimesCadastrados from "../../assets/icons/AvaliarJogadoras.svg";
import RankingIcon from "../../assets/icons/Group.svg";
import ExitIcon from "../../assets/icons/Exit.svg";
import {
  NavLink,
  ContainerLayout,
  ContainerLogo,
  PageContents,
  ContainerNav,
} from "./StyledLayout";
import "fontsource-roboto/latin.css";

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
  // {
  //   text: "Lorem",
  //   src: AvaliarTimesUsuarios, //AvaliarTimesUsuarios.svg
  //   to: "/times",
  //   alt: "Icon Dashboard",
  // },
  {
    text: "Ranking",
    src: RankingIcon, //Group.svg
    to: "/ranking",
    alt: "Ranking",
  },
  {
    text: "Sair",
    src: ExitIcon,
    to: "/login",
    alt: "Logout",
  },
];

export const Layout = (props) => {
  const { children } = props;
  return (
    <ContainerLayout>
      <Sidebar variation="left">
        <ContainerLogo>
          <img src={imgLogo} alt="Logo DFF" />
        </ContainerLogo>
        <ContainerNav>
          {navItems.map((item, index, array) => {
            return (
              <NavLink key={index} exact to={item.to} activeClassName="actived">
                <img src={item.src} alt={item.alt} />
                <Button
                  type="oulined"
                  variation={index === array.length - 1 ? "alert" : "secondary"}
                  size="small"
                >
                  {item.text}
                </Button>
              </NavLink>
            );
          })}
        </ContainerNav>
      </Sidebar>
      <PageContents>{children}</PageContents>
    </ContainerLayout>
  );
};
