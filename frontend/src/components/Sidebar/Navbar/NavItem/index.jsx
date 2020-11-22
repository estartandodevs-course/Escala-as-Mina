import { Button } from '../../../Button';
import styled from 'styled-components';


const StyledNavItem = styled.div`
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
    const { buttonColor } = props;
    const { text, src } = props.item;
    const alt = `{name} icon`

    return (
        <StyledNavItem>
            <img src={src} alt={alt} />
            <Button name={text} buttonColor={buttonColor} />
        </StyledNavItem>
    )
}