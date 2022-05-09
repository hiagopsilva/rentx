import { StatusBar } from 'expo-status-bar';
import React, { FC, useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { Container, Header, TotalCars, HeaderContent, CarList } from './styles';

import Logo from '../../assets/logo.svg';
import Car from '../../components/Car';
import api from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import Load from '../../components/Load';

type Props = {};

const Home: FC<Props> = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState<CarDTO[]>([]);

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

  useEffect(() => {
    async function fetchCarsList() {
      try {
        const response = await api.get('/cars');

        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCarsList();
  }, []);

  return (
    <Container>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={handleCarDetails} />
          )}
        />
      )}
    </Container>
  );
};

export default Home;
