import React from 'react';
import styled from 'styled-components';

interface H1Props {
  children: React.ReactNode;
}

export default function H1({ children }: H1Props) {
  return <StyledH1>{children}</StyledH1>;
}

const StyledH1 = styled.h1`
  font-size: 50px;
  font-weight: 700;
`;
