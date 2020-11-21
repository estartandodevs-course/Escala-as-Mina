import { LogoutButton } from '../LogoutButton';
import { NavItem } from './NavItem';

export const Navbar = function (props) {
    const { links } = props;

    return (
        <div>
            {links.map((link) => { return <NavItem link={link} /> })}
            <LogoutButton />
        </div>
    )
}