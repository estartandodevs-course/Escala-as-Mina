import styled, { css } from 'styled-components';
import 'fontsource-raleway';
import 'fontsource-poppins';
import 'fontsource-roboto';

export const Title = styled.h1`
  text-align: ${(props) => props.align || 'center'};
  color: ${(props) => props.color || props.theme.pallete.gray.thirdGray};
  font-size: ${(props) => props.size || '2.75rem'};
  font-weight: '700';
  font-family: 'Raleway';
`;

export const Title = styled.h2`
  text-align: ${(props) => props.align || 'center'};
  color: ${(props) => props.color || props.theme.pallete.gray.thirdGray};
  font-size: ${(props) => props.size || '2.4rem'};
  font-weight: ${(props) => (props.type !== 'h2' ? '600' : '500')};
  font-family: ${(props) => (props.type === 'h3' ? 'Poppins' : 'Raleway')};
`;

export const Paragraph = styled.p`
  text-align: ${(props) => props.align || 'left'};
  color: ${(props) => props.color || props.theme.pallete.gray.white};
  font-size: ${(props) => props.size || '1rem'};
  font-weight: ${(props) => props.weight || '400'};
  font-family: ${(props) => props.font || 'Raleway'};
  ${(props) =>
    props.gradient &&
    css`
      background-image: ${props.theme.pallete.gradient.main};
      background-size: 100%;
      background-clip: text;
      text-fill-color: transparent;
    `}
`;

export const Span = styled.span`
  text-align: ${(props) => props.align || 'left'};
  color: ${(props) => props.color || props.theme.pallete.gray.white};
  font-size: ${(props) => props.size || '1rem'};
  font-weight: ${(props) => props.weight || '400'};
  font-family: ${(props) => props.font || 'Raleway'};
  ${(props) =>
    props.gradient &&
    css`
      background-image: ${props.theme.pallete.gradient.main};
      background-size: 100%;
      background-repeat: repeat;
      text-fill-color: transparent;
    `}
`;
