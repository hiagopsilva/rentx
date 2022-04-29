import React, { FC } from 'react';
import BackButton from '../../components/BackButton';

import { Container, Header } from './styles';

type Props = {};

const CarDetails: FC<Props> = () => {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
    </Container>
  );
};

export default CarDetails;
