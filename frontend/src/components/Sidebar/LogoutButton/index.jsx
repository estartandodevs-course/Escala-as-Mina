import { NavItem } from '../Navbar/NavItem/';
import src from '../../../assets/icons/Exit.svg';

const item = {
    text: "Sair",
    src: src
}

export const LogoutButton = () => {
    return (
        <NavItem buttonColor="#EB4783" item={item} />
    )
} 