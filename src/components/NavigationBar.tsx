import React, { useState } from 'react';
import styled from 'styled-components';
import { LinkButton } from './Button';

const navigationItems = ['Home', 'Blogs', 'Projects', 'About me', 'Contact'];

export default function NavigationBar() {
  const [active, setActive] = useState('Home');
  return (
    <Container>
      {navigationItems.map((item) => (
        <LinkButton
          onClick={() => {
            setActive(item);
          }}
          active={active === item}
          key={item}
        >
          {item}
        </LinkButton>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  justify-content: flex-end;
  box-sizing: border-box;
  position: fixed;
  gap: 20px;
`;
