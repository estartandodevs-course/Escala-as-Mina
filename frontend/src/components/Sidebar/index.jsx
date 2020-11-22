// import { Navbar } from './Navbar';
import styled from 'styled-components';
import logo from '../../assets/images/Logo.png';
import { LogoutButton } from './LogoutButton';
import { Navbar } from './Navbar';
import dashboard from '../../assets/icons/Group-2.svg';
import sumula from '../../assets/icons/AdicionarSumula.svg';
import jogadoras from '../../assets/icons/AvaliarJogadoras.svg';
import times from '../../assets/icons/AvaliarTimesUsuarios.svg';
import group from '../../assets/icons/Group.svg';

const navItems = [
    {
        text: "Dashboard",
        src: dashboard
    },
    {
        text: "Adicionar Rodada",
        src: sumula
    },
    {
        text: "Times Cadastrados",
        src: jogadoras
    },
    {
        text: "Lorem ipsum",
        src: times
    },
    {
        text: "Lorem ipsum",
        src: group
    }
]

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    // background-color: {props => props.theme.sidebarColor};
    background-color: #100928;
    width: 18vw; //18% of 1440px ~ 264
    height: 100vh;
    border-radius: 0 30px 30px 0;

    #logo {
        width: 65%; //65% of parent's width ~ 170px 
        height auto;
        margin-top: 20px;
    }
`

export const Sidebar = (props) => {
    return (
        <Wrapper>
            <img id="logo" src={logo} alt="Logo Diario Feminino" />
            <Navbar navItems={navItems} />
            <LogoutButton />
        </Wrapper>
    )
}