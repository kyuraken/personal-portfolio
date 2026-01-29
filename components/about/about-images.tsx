import imageOne from '@/public/images/about/about-image-1.jpeg';
import imageTwo from '@/public/images/about/about-image-2.png';
import imageThree from '@/public/images/about/about-image-3.png';
import Image from 'next/legacy/image';
import React from 'react';
import { AboutImageContainer, ImageWrapper } from './about.styles';

export interface IAboutImageProps {}

export const AboutImage: React.FunctionComponent<IAboutImageProps> = () => {
  return (
    <AboutImageContainer>
      <ImageWrapper $down>
        <Image
          src={imageTwo}
          alt="Jason Hua"
          sizes="80vw"
          layout="fill"
          objectFit="cover"
          priority={false}
        />{' '}
      </ImageWrapper>
      <ImageWrapper>
        <Image
          src={imageOne}
          alt="Jason Hua"
          sizes="80vw"
          layout="fill"
          objectFit="cover"
          priority={false}
        />{' '}
      </ImageWrapper>
      <ImageWrapper $down>
        <Image
          src={imageThree}
          alt="Jason Hua"
          sizes="80vw"
          layout="fill"
          objectFit="cover"
          priority={false}
        />{' '}
      </ImageWrapper>
    </AboutImageContainer>
  );
};
