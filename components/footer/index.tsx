'use client';

import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  ArrowToTop,
  ContactHeader,
  ContactLink,
  Copyright,
  FooterArrowLine,
  FooterContact,
  FooterContacts,
  FooterLine,
  FooterSocials,
  FooterStyled,
  FooterSubTitle,
  FooterSubTitleContainer,
  FooterTitle,
  FooterTitleContainer,
  Small,
} from './footer.styles';

const toTop = () => {
  scroll.scrollToTop({ delay: 0, duration: 0 });
};

export interface IFooterProps {}

export const Footer: React.FunctionComponent<IFooterProps> = () => {
  const year = new Date().getFullYear();
  return (
    <FooterStyled>
      <FooterSubTitleContainer>
        <FooterSubTitle>get in touch</FooterSubTitle>
      </FooterSubTitleContainer>
      <FooterTitleContainer>
        <FooterTitle
          href="mailto:jasonhua610@gmail.com"
          data-hover="Let's talk!"
        >
          {' '}
          Need a developer?
        </FooterTitle>
      </FooterTitleContainer>

      <FooterContacts>
        <FooterContact>
          <ContactHeader>Call me</ContactHeader>
          <ContactLink href="tel:+13175720805">317-572-0805</ContactLink>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Social</ContactHeader>{' '}
          <FooterSocials>
            <ContactLink
              href="https://github.com/kyuraken"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </ContactLink>
            <ContactLink
              href="https://www.linkedin.com/in/jasonhua610/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </ContactLink>
          </FooterSocials>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Letߴs grab a coffee.</ContactHeader>
          <ContactLink href="tel:+13175720805">
            jasonhua610@gmail.com
          </ContactLink>
        </FooterContact>
      </FooterContacts>

      <FooterArrowLine>
        <FooterLine />
        <ArrowToTop title="Back to Top" onClick={toTop}></ArrowToTop>
      </FooterArrowLine>

      <Copyright>
        <small>
          &copy; Copyright {year},{' '}
          <Small
            href="https://github.com/kyuraken"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jason Hua
          </Small>
        </small>
      </Copyright>
    </FooterStyled>
  );
};
