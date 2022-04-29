import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Price,
  Period,
  About,
} from './styles';

type Props = {};

const CarDetails: FC<Props> = () => {
  return (
    <Container>
      <StatusBar style="dark" translucent backgroundColor="transparent" />

      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imageUrl={[
            'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png',
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>
    </Container>
  );
};

export default CarDetails;
