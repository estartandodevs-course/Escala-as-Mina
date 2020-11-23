import { theme } from '../../../../pallete'
import { styled } from 'styled-components';
import { Button } from '../../../Button';
import { StyledNavItem } from '../NavItem';

theme.primaryColor = theme.sidebarColor;

const ActiveButton = styled(Button)`
    background-image: ${theme => theme.activeButtonGradient};
`

const ActiveIcon = styled.img`
    // fill: HOW TO FILL LINEAR GRADIENT HERE?
`

export const ActiveNavItem = (props) => {
    const { text, src } = props.item;
    const alt = `${text} icon`

    return (
        <StyledNavItem theme={theme}>
            <ActiveIcon src={src} alt={alt} />
            <ActiveButton name={text} />
        </StyledNavItem>
    )
}