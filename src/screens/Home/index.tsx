import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Header, TotalCars, HeaderContent } from './styles';

import Logo from '../../assets/logo.svg';

type Props = {};

const Home: FC<Props> = () => (
  <Container>
    <StatusBar style="light" translucent backgroundColor="transparent" />
    <Header>
      <HeaderContent>
        <Logo width={RFValue(108)} height={RFValue(12)} />
        <TotalCars>Total 12 carros</TotalCars>
      </HeaderContent>
    </Header>
  </Container>
);

export default Home;
