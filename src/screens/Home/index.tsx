import { StatusBar } from 'expo-status-bar';
import React, { FC, useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
  MyCarsButton,
} from './styles';

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
  const theme = useTheme();

  const handleCarDetails = (car: CarDTO) =>
    navigation.navigate('CarDetails', { car });

  const handleOpenMyCars = (car: CarDTO) =>
    navigation.navigate('MyCars', { car });

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
          <TotalCars>Total {cars.length} carros</TotalCars>
        </HeaderContent>
      </Header>

      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}

      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons name="ios-car-sport" size={32} color={theme.colors.shape} />
      </MyCarsButton>
    </Container>
  );
};

export default Home;
