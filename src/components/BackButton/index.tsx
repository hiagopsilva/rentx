import { MaterialIcons } from '@expo/vector-icons';
import React, { FC } from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { Container } from './styles';

type Props = BorderlessButtonProps & {
  color?: string;
};

const BackButton: FC<Props> = ({ color, ...rest }) => {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color || theme.colors.text}
      />
    </Container>
  );
};

export default BackButton;
