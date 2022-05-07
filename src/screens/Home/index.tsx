import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { Container, Header, TotalCars, HeaderContent, CarList } from './styles';

import Logo from '../../assets/logo.svg';
import Car from '../../components/Car';

type Props = {};

const Home: FC<Props> = () => {
  const navigation = useNavigation();

  const carData = {
    brand: 'Audi',
    name: 'RS 5 coupé',
    rent: {
      period: 'ao dia',
      price: 120,
    },
    thumbnail:
      'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png',
  };

  const handleCarDetails = () => navigation.navigate('CarDetails');

  return (
    <Container>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => (
          <Car data={carData} onPress={handleCarDetails} />
        )}
      />
    </Container>
  );
};

export default Home;
