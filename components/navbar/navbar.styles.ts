import styled, { css, keyframes } from 'styled-components';

interface isOpenProps {
  readonly $isOpen: boolean;
}

export const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 13vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  z-index: 999;
`;

export const NavigationOverlay = styled.nav<isOpenProps>`
  position: fixed;
  background: #0c0e13;
  z-index: -2;
  top: ${({ $isOpen }) => ($isOpen ? '0' : '-120%')};
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: 4em;
  transition: all 2s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const NavigationLists = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2rem;
  padding-bottom: 5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-bottom: 3rem;
  }
`;

export const NavigationList = styled.li``;

export const NavigationLink = styled.a`
  font-size: clamp(var(--min), var(--val), var(--max));
  --min: 1.75em;
  --val: 2.5vw;
  --max: 2em;
  text-transform: uppercase;
  font-weight: 600;
`;

const quoteGlow = keyframes`
  0% {
    text-shadow: 0 0 0 rgba(250, 204, 21, 0);
  }
  50% {
    text-shadow: 0 0 16px rgba(250, 204, 21, 0.8),
      0 0 36px rgba(250, 204, 21, 0.6);
  }
  100% {
    text-shadow: 0 0 0 rgba(250, 204, 21, 0);
  }
`;

export const NavigationQuote = styled.span<isOpenProps>`
  font-style: italic;
  position: absolute;
  bottom: 2rem;
  left: 5%;
  color: #e5e7eb;
  display: inline-block;
  transition: color 200ms ease, transform 200ms ease;

  ${({ $isOpen }) =>
    $isOpen
      ? css`
          animation: ${quoteGlow} 2s ease;
          animation-delay: 600ms;
          animation-fill-mode: both;
        `
      : ''}

  &:hover,
  &:focus-visible {
    color: #facc15;
    transform: translateY(-2px);
    animation: ${quoteGlow} 900ms ease;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: 7.5%;
  }
`;

export const NavigationSocials = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 5%;
  display: flex;
  gap: 1.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    right: 7.5%;
  }
`;
