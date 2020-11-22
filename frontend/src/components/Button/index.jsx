import styled from 'styled-components';


const StyledButton = styled.button`
    border: 1px solid ${props => props.buttonColor || "#75F099"};
    border-radius: 30px;
    color: ${props => props.buttonColor || "#75F099"};
    font-size: 12px;
    background-color: transparent;
    width: 64%;

    &:focus {
        outline: none;
    }

`

export const Button = (props) => {
    const { name, buttonColor } = props;

    return (
        <StyledButton buttonColor={buttonColor}>
            {name}
        </StyledButton>
    )
}