import { SectionHeading } from '../ui/section-heading';
import { AboutImage } from './about-images';
import {
  AboutContainer,
  AboutDescription,
  AboutDescriptionContainer,
  DownloadIcon,
  GlowTag,
  ResumeLink,
  ResumeLinkContainer,
} from './about.styles';

export interface IAboutProps {}

export const About: React.FunctionComponent<IAboutProps> = () => {
  return (
    <AboutContainer id="about" className="container">
      <SectionHeading
        titleNumber="02"
        sectionTitle="about"
        sectionDetails="n. an organism that turns caffeine into software."
      />
      <AboutImage />
      <AboutDescriptionContainer>
        <AboutDescription>
          Hello! My name is Jason Hua. I am a computer science student, software
          engineer, and aspiring technologist with a strong interest in
          intelligent systems and security. I am currently pursuing a Bachelor
          of Science in Computer Science at the Georgia Institute of Technology,
          where my concentrations focus on Cybersecurity & Privacy and
          Intelligence, with an expected graduation in December 2026
        </AboutDescription>
        <AboutDescription>
          Throughout my academic and professional experience, I have worked
          with a wide range of technologies, including Java, Python, C/C++,
          JavaScript, TypeScript, React, Node.js, Express, MongoDB, MySQL,
          Firebase, Docker, and Git. I’ve applied these tools across full-stack
          web applications, embedded systems, and machine learning projects.
          While my work spans multiple domains, I am especially comfortable
          building end-to-end systems—from backend APIs and databases to
          frontend interfaces—while keeping performance and reliability in
          mind. Currently, I am continuing to deepen my understanding of data
          structures, systems programming, machine learning, and AI, while
          expanding my experience with modern development tools and
          architectures. I’m particularly interested in the intersection of
          intelligence, security, and real-world applications.
        </AboutDescription>
        <AboutDescription>
          Outside of software development, I enjoy watching sports (Go{' '}
          <GlowTag tabIndex={0}>Pacers</GlowTag> and{' '}
          <GlowTag tabIndex={0}>Colts!!!</GlowTag>) spending time hanging out
          with friends, swimming, and going to the gym. I like staying active
          and value having balance outside of tech, whether that’s through
          fitness, competition, or simply enjoying time with people around me.
        </AboutDescription>
      </AboutDescriptionContainer>
      <ResumeLinkContainer>
        <ResumeLink
          href="/documents/JasonHuaResume.pdf"
          download="JasonHuaResume"
        >
          Download Resume
        </ResumeLink>
        <DownloadIcon />
      </ResumeLinkContainer>
    </AboutContainer>
  );
};
