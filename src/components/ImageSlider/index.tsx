import React, { FC } from 'react';

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from './styles';

type Props = {
  imageUrl: string[];
};

const ImageSlider: FC<Props> = ({ imageUrl }) => {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage source={{ uri: imageUrl[0] }} resizeMode="contain" />
      </CarImageWrapper>
    </Container>
  );
};

export default ImageSlider;
