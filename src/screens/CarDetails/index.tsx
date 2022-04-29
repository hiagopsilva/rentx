import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';

import { Container, Header, CarImages } from './styles';

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
    </Container>
  );
};

export default CarDetails;
