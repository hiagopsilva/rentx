import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

type Props = {};

const Load: FC<Props> = () => {
  const theme = useTheme();

  return (
    <ActivityIndicator
      color={theme.colors.main}
      size="large"
      style={{ flex: 1 }}
    />
  );
};

export default Load;
