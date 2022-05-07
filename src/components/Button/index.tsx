import React from 'react';

import { Container, Title } from './styles';

type Props = {
  title: string;
  color?: string;
  onPress: () => void;
};

const Button: React.FC<Props> = ({ title, color, onPress, ...rest }) => {
  return (
    <Container {...rest} color={color} onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
