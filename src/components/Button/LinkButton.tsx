import React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../utils/themes';

interface LinkButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  active?: boolean;
}

export default function LinkButton({
  onClick,
  children,
  active,
}: LinkButtonProps) {
  return (
    <StyledButton onClick={onClick} active={active ?? false}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ active: boolean }>`
  cursor: pointer;
  border: none;
  background: none;
  font-size: 16px;
  color: ${defaultTheme.colors.text};
  font-weight: ${({ active }) => (active ? '700' : '400')};
  :hover {
    opacity: 70%;
  }
`;
