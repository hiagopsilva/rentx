/* eslint-disable  */
import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { Container, Header } from './styles';

import Logo from '../../assets/logo.svg'

type Props = {};

const Home: FC<Props> = () => (
  <Container>
    <StatusBar
      style="light"
      translucent
      backgroundColor='transparent'
    />
    <Header>
      <Logo />
    </Header>
  </Container>
);

export default Home;
