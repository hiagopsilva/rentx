import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Accessory from '../../components/Accessory';
import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

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

type Props = {};

type Params = {
  car: CarDTO;
};

const CarDetails: FC<Props> = () => {
  const navigation = useNavigation();

  const route = useRoute();

  const { car } = route.params as Params;

  const handleConfirmRental = () => navigation.navigate('Scheduling');
  return (
    <Container>
      <StatusBar style="dark" translucent backgroundColor="transparent" />

      <Header>
        <BackButton onPress={() => navigation.goBack()} />
      </Header>

      <CarImages>
        <ImageSlider imageUrl={car.photos} />
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
              icon={speedSvg}
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
