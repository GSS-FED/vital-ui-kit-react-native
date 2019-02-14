import styled from 'styled-components/native';

export interface CardSideLabelProps {
  color: string;
}

const CardSideLabel= styled.View<CardSideLabelProps>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 7;
  border-top-left-radius: 5;
  border-bottom-left-radius: 5;
  background-color: ${(props) => props.color};
`;

export default CardSideLabel;
