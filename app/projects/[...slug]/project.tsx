'use client';

import { Project as IProject } from '@/.velite';
import { MDXContent } from '@/components/mdx-components';
import Link from 'next/link';
import {
  ContentContainer,
  LinkContainer,
  ProjectDetailImage,
  ProjectDetailImageContainer,
  ProjectDetailsContainer,
  ProjectDetailsTitle,
  ProjectSubtitle,
  TechStackContainer,
  TechStackItem,
  TechStackList,
  TechStackTitle,
} from './styles';

interface ProjectProps {
  project: IProject;
}

const Project = ({ project }: ProjectProps) => {
  return (
    <>
      <ProjectDetailsContainer className="container">
        <ProjectSubtitle>{project.subTitle}</ProjectSubtitle>
        <ProjectDetailsTitle>{project.title}</ProjectDetailsTitle>
        <ProjectDetailImageContainer>
          <ProjectDetailImage
            src={project.coverImage}
            alt={`Cover Image for ${project.title}`}
            width={1150}
            height={530}
          />
        </ProjectDetailImageContainer>
        <ContentContainer>
          <MDXContent code={project.content} />
          {project.techStack && project.techStack.length > 0 ? (
            <TechStackContainer>
              <TechStackTitle>Languages/Tech</TechStackTitle>
              <TechStackList>
                {project.techStack.map((item) => (
                  <TechStackItem key={item}>{item}</TechStackItem>
                ))}
              </TechStackList>
            </TechStackContainer>
          ) : null}
          <LinkContainer>
            <Link href="/">← View more projects</Link>
          </LinkContainer>
        </ContentContainer>
      </ProjectDetailsContainer>{' '}
    </>
  );
};

export default Project;
