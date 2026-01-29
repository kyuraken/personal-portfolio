import { Download } from 'lucide-react';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

interface ImageProps {
  readonly $down?: boolean;
}

export const AboutContainer = styled.section`
  margin-bottom: 5rem;
`;

export const AboutImageContainer = styled.div`
  display: grid;
  margin-top: 1.5rem;
  margin-bottom: 4rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 3rem;
  }
`;

export const ImageWrapper = styled.div<ImageProps>`
  position: relative;
  overflow: hidden;
  border-radius: 0.375rem;
  aspect-ratio: 1 / 1;
  transform: ${(props) => (props.$down ? 'translateY(3rem)' : 'translateY(0)')};
`;

export const AboutDescriptionContainer = styled.div`
  margin: 6rem auto 0 auto;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 85%;
  }
`;

export const AboutDescription = styled.p`
  --min: 1em;
  --val: 2.5vw;
  --max: 1.125em;
  margin-bottom: 1rem;
  line-height: 1.5;
  color: #d1d5db;
`;

const glowBounce = keyframes`
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-3px);
  }
  60% {
    transform: translateY(1px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const GlowTag = styled.span`
  color: #e5e7eb;
  cursor: pointer;
  font-weight: 600;
  display: inline-block;
  transition: color 200ms ease, text-shadow 200ms ease;

  &:hover,
  &:focus-visible {
    color: #facc15;
    text-shadow: 0 0 8px rgba(250, 204, 21, 0.6),
      0 0 18px rgba(250, 204, 21, 0.4);
    animation: ${glowBounce} 500ms ease;
  }

  &:active {
    color: #fde047;
    text-shadow: 0 0 10px rgba(253, 224, 71, 0.7),
      0 0 24px rgba(253, 224, 71, 0.5);
  }
`;

export const ResumeLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1.5rem auto 0 auto;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 85%;
  }
`;

export const StyledLink = styled.a`
  color: #6366f1;
  text-decoration: underline;
  font-weight: 500;

  &:hover {
    text-decoration: none;
    color: #4f46e5;
  }
`;

export const StyledNextLink = styled(Link)`
  color: #6366f1;
  text-decoration: underline;
  font-weight: 500;

  &:hover {
    text-decoration: none;
    color: #4f46e5;
  }
`;

export const ResumeLink = styled.a`
  font-size: clamp(var(--min), var(--val), var(--max));
  --min: 1em;
  --val: 2.5vw;
  --max: 1.125em;
  padding-bottom: 0.5rem;
  font-weight: 600;
  position: relative;
  background: linear-gradient(to right, #d4e3e3, #c8d7d7),
    linear-gradient(to right, #21a0b6, #9892e3, #8798a9);
  background-size: 100% 0.125em, 0 0.125em;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;

  &:hover {
    background-size: 0 0.125em, 100% 0.125em;
  }
`;

export const DownloadIcon = styled(Download)`
  padding-bottom: 0.5rem;
  height: 2rem;
`;
