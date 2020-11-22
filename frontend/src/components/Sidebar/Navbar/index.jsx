import { NavItem } from './NavItem';
import styled from 'styled-components';

const StyledNavBar = styled.div`
    margin-top: 80px;
    width: 100%;
`


export const Navbar = function (props) {
    const { navItems } = props;

    return (
        <StyledNavBar>
            {navItems.map((item) => { return <NavItem item={item} buttonColor="#75F099" /> })}
        </StyledNavBar>
    )
}