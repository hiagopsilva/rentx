import React from 'react';

import { Container, Title } from './styles';

type Props = {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
};

const Button: React.FC<Props> = ({
  title,
  color,
  onPress,
  enabled = true,
  ...rest
}) => {
  return (
    <Container
      {...rest}
      color={color}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: enabled ? 1 : 0.5 }}
    >
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
