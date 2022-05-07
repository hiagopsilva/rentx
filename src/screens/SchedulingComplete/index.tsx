import React, { FC } from 'react';
import { useWindowDimensions } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import ConfirmButton from '../../components/ConfirmButton';
import { Container, Content, Title, Message, Footer } from './styles';

type Props = {};

const SchedulingComplete: FC<Props> = () => {
  const { width } = useWindowDimensions();

  const navigation = useNavigation();

  const handleHome = () => navigation.navigate('Home');

  return (
    <Container>
      <StatusBar style="light" translucent backgroundColor="transparent" />

      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora voce só precisa ir {'\n'} até a concessionaria da RENTX {'\n'}{' '}
          pegar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleHome} />
      </Footer>
    </Container>
  );
};

export default SchedulingComplete;
