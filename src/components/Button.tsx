import React, {FC, useState} from 'react';
import styled from 'styled-components';
import { Svg } from './Svg';

interface ButtonProps {
  title: string;
  outLined?: boolean;
  color?: string;
  bgColor?: string;
  bold?: boolean;
  lineColor?: string;
  list?: boolean;

  children?: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled.a<StyledButtonProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.75em 1.5em;
  width: max-content;

  border: ${p => p.outLined ? '2px solid var(--color-gray)' : 'none'};
  border-color: ${p => p.lineColor ? p.lineColor : 'var(--color-gray)'};
  background: ${p => p.bgColor ?  p.bgColor : 'none'};
  color: ${p => p.color ?  p.color : 'none'};
  font-weight: ${p => p.bold ? 'var(--fs-bold)' : 'var(--fs-sm)'};
  border-radius: 15px;

  &:hover {
    color: var(--color-black);
    border-color: var(--color-black);

    background: var(--color-white);
  }
`;

interface StyledButtonProps {
  outLined?: boolean;
  color?: string;
  bgColor?: string;
  bold?: boolean;
  lineColor?: string;
}

export const Button:FC<ButtonProps> = (props) => {

  return (
  <StyledButton {...props} onClick={props.onClick}>
    <div>{props.title}</div>
  </StyledButton>
  )
};
