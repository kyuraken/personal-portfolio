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
          Hello! My name is Jason Hua. I am a Computer Science student at
          Georgia Tech focusing on Cybersecurity and Intelligence, with an
          expected graduation in December 2026. My interest in software
          development actually started in a slightly rebellious way. I grew up
          in a pretty strict Asian household (I love my parents), but growing
          up, I was not really allowed on the internet.
        </AboutDescription>
        <AboutDescription>
          So naturally, when you tell a kid they cannot do something, what do
          you do? You rebel. While other kids were sneaking out or getting into
          trouble, my version of rebellion was going to the local library
          because that is where the computers were. I started going there
          almost every day, including weekends, and that is where I discovered
          how powerful the internet could be and how much I could learn by
          connecting with people online.
        </AboutDescription>
        <AboutDescription>
          Because I was going there so often, my parents figured out why I
          wanted to go to the library. That phase ended, but they were really
          supportive once they understood my curiosity. I got my first laptop,
          and through small indie games I played online, I started learning how
          code actually worked. I built a very simple game on my own. It
          definitely looked like it was made by a 12-year-old, but when I
          shared it at school and later found out people online were playing it
          too, that really stuck with me. Seeing something I created reach
          other people was incredibly motivating.
        </AboutDescription>
        <AboutDescription>
          From there, I kept building things. Whether that was actual hardware
          computers or simple programs, I loved creating something new. In high
          school, I worked with friends to create a scheduling app that showed
          class end times, which was better than staring at the one clock on the
          wall. We kept adding features based on feedback from classmates and
          even added a lunch menu because that is how desperate people were
          when they were hungry. We ended up with around 300 students using it.
          That experience made me realize I really enjoy building software that
          helps people in practical ways. That is what led me to Georgia Tech,
          where I have continued working on trying to learn more about how I can make an impact on others. 
          Being surrounded by like-minded peers pushed me to think more deeply about building
          software that is not just functional, but secure, scalable, and
          reliable. Now, instead of just helping hungry high schoolers figure
          out what is on the lunch menu today, I am excited to apply those same
          skills to roles where I can build reliable systems that help people
          at a much larger scale.
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
