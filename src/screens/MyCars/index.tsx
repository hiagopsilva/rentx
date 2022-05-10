import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import BackButton from '../../components/BackButton';
import Car from '../../components/Car';
import Load from '../../components/Load';
import { CarDTO } from '../../dtos/CarDTO';
import api from '../../services/api';

import {
  Appointments,
  AppointmentsQuantity,
  AppointmentsTitle,
  CarFooter,
  CarFooterDate,
  CarFooterPeriod,
  CarFooterTitle,
  CarWrapper,
  Container,
  Content,
  Header,
  SubTitle,
  Title,
} from './styles';

interface CarProps {
  car: CarDTO;
  id: string;
  user_id: string;
  startDate: string;
  endDate: string;
}

const MyCars: React.FC = () => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();

  const navigation = useNavigation();

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/schedules_byuser?user_id=1');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);
  return (
    <Container>
      <StatusBar style="light" translucent backgroundColor="transparent" />

      <Header>
        <BackButton
          onPress={() => navigation.goBack()}
          color={theme.colors.shape}
        />

        <Title>
          Escolha uma{'\n'}data de início e{'\n'}fim do aluguel{' '}
        </Title>

        <SubTitle>Conforto, segurança e praticidade.</SubTitle>
      </Header>
      {loading ? (
        <Load />
      ) : (
        <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
            <AppointmentsQuantity>09</AppointmentsQuantity>
          </Appointments>

          <FlatList
            data={cars}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Periodo</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
          />
        </Content>
      )}
    </Container>
  );
};

export default MyCars;
