import styled from 'styled-components';


const StyledButton = styled.button`
    border: 1px solid ${props => props.theme.primaryColor};
    border-radius: 30px;
    color: ${props => props.theme.primaryColor};
    font-size: 12px;
    background-color: transparent;
    width: 64%;

    &:focus {
        outline: none;
    }

`

export const Button = (props) => {
    const { name } = props;

    return (
        <StyledButton>
            {name}
        </StyledButton>
    )
}