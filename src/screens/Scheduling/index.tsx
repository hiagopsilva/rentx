import React from 'react';
import { useTheme } from 'styled-components';
import BackButton from '../../components/BackButton';

import { Container, Header, Title } from './styles';

const Scheduling: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} color={theme.colors.shape} />

        <Title>
          Escolha uma{'\n'}data de início e{'\n'}fim do aluguel{' '}
        </Title>
      </Header>
    </Container>
  );
};

export default Scheduling;
