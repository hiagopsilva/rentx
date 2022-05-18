import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Accessory from '../../components/Accessory';
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
  Accessories,
  Footer,
} from './styles';
import Button from '../../components/Button';
import { CarDTO } from '../../dtos/CarDTO';
import getAccessoryIcon from '../../utils/getAccessoryIcon';

type Props = {};

type Params = {
  car: CarDTO;
};

const CarDetails: FC<Props> = () => {
  const navigation = useNavigation();

  const route = useRoute();

  const { car } = route.params as Params;

  const handleConfirmRental = () => navigation.navigate('Scheduling', { car });

  return (
    <Container>
      <StatusBar style="dark" translucent backgroundColor="transparent" />

      <Header>
        <BackButton onPress={() => navigation.goBack()} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map(accessory => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>

        <About>{car.about}</About>
      </Content>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
};

export default CarDetails;
