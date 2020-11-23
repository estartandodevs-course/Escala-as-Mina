import { Button } from '../../../Button';
import styled from 'styled-components';


export const StyledNavItem = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: auto;
    margin-bottom: 16px;
    
    img {
        width: 28px;
        height: 32px;
    }
`

export const NavItem = (props) => {
    const { text, src } = props.item;
    const alt = `${text} icon`

    return (
        <StyledNavItem>
            <img src={src} alt={alt} />
            <Button name={text} />
        </StyledNavItem>
    )
}