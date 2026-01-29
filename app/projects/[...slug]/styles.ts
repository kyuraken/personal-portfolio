import Image from 'next/legacy/image';
import styled from 'styled-components';

export const ProjectDetailsContainer = styled.section``;

export const ProjectSubtitle = styled.span`
  display: flex;
  justify-content: center;
  color: violet;
  font-weight: 500;
`;

export const ProjectDetailsTitle = styled.h2`
  --min: 1.115em;
  --val: 4.5vw;
  --max: 2rem;
  font-family: ${({ theme }) => theme.fonts.inter};
  line-height: 2.25rem;
  letter-spacing: -0.025em;
  margin: 0.75rem auto 1.5rem auto;
  font-weight: 600;
  text-align: center;
  width: 100%;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 80%;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 60%;
  }
`;

export const ProjectDetailImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjectDetailImage = styled(Image)`
  object-fit: cover;
  width: 50%;
  border-radius: 10px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  margin: 2rem auto;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 80%;
  }
`;

export const TechStackContainer = styled.div`
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(148, 163, 184, 0.2);
`;

export const TechStackTitle = styled.h4`
  font-size: clamp(0.9rem, 2.2vw, 1.05rem);
  font-weight: 600;
  color: #e5e7eb;
  margin-bottom: 0.75rem;
`;

export const TechStackList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TechStackItem = styled.li`
  font-size: 0.85rem;
  color: #cbd5f5;
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  transition: transform 180ms ease, box-shadow 180ms ease,
    border-color 180ms ease, color 180ms ease, background 180ms ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-2px) scale(1.03);
    color: #f8fafc;
    border-color: rgba(250, 204, 21, 0.7);
    background: rgba(250, 204, 21, 0.12);
    box-shadow: 0 6px 16px rgba(250, 204, 21, 0.25);
  }
`;

export const LinkContainer = styled.div`
  margin: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
  font-size: clamp(0.85rem, 2.5vw, 1rem);
`;
