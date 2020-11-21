import { Navbar } from './Navbar';

const links = [
    {
        name: "Dashboard",
        link: "./dashboard",
        image: "path-to-image"
    },
    {
        name: "Adicionar Rodada",
        link: "./rodadas",
        image: "path-to-image"
    },
    {
        name: "Times Cadastrados",
        link: "./times",
        image: "path-to-image"
    }
]

export const Sidebar = function (props) {
    const { src } = props;

    return (
        <>
            <img src={src} alt="Logo Diario Feminino" />
            <Navbar links={links} />
        </>
    )
}