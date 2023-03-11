import React from 'react';
import styled from 'styled-components';
import './App.css';
import profile from './assets/profile.png';
import H1 from './components/H1';
import NavigationBar from './components/NavigationBar';
import { defaultTheme } from './utils/themes';

function App() {
  return (
    <>
      <NavigationBar />
      <Background>
        <Container>
          <ImageContainer>
            <ProfileImage src={profile} alt="profile" />
          </ImageContainer>
        </Container>
        <TextContainer>
          <H1>Hi, I'm Tuyen Phan</H1>
          <H1>Software Engineer</H1>
        </TextContainer>
      </Background>
    </>
  );
}

const Background = styled.div`
  display: flex;
  flex-direction: row;
  background: linear-gradient(
    45deg,
    ${defaultTheme.colors.background},
    ${defaultTheme.colors.contrastBackground}
  );
  color: ${defaultTheme.colors.text};
  justify-content: space-around;
  height: 100vh;
`;

const ProfileImage = styled.img`
  height: 300px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${defaultTheme.colors.text};
  padding-bottom: 50px;
  padding-right: 20px;
  height: 200px;
  border-radius: 20px;
  border: 5px solid ${defaultTheme.colors.contrastBackground};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
`;

export default App;
