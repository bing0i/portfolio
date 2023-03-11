import React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../utils/themes';

interface PrimaryButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
}

export default function PrimaryButton({
  onClick,
  children,
}: PrimaryButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 7px;
  border: none;
  background-color: ${defaultTheme.colors.background};
  color: ${defaultTheme.colors.contrastText};
  :hover {
    opacity: 80%;
  }
`;
