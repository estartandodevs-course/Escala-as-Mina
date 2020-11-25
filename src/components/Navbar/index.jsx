import { NavItem } from './NavItem';
// import {ActiveNavItem} from './ActiveNavItem';
import styled from 'styled-components';

export const StyledNavBar = styled.div`
    margin-top: 80px;
    width: 100%;
`


export const Navbar = function (props) {
    const { navItems } = props;

    return (
        <StyledNavBar>
            {/* {navItems.map((item) => { return item.active ? <ActiveNavItem item={item} /> : <NavItem item={item} /> })} */}
            {navItems.map((item) => { return <NavItem item={item} /> })}
        </StyledNavBar>
    )
}