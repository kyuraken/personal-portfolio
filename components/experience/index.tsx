import React from 'react';
import { SectionHeading } from '../ui/section-heading';
import {
  CenterLine,
  Company,
  EmptySection,
  ExperienceCard,
  ExperienceCircle,
  ExperienceContainer,
  ExperienceDate,
  ExperienceDetail,
  ExperienceDetails,
  ExperienceHeaderContent,
  ExperiencePing,
  ExperienceSectionContainer,
  ExperienceWrapper,
  JobDescriptionList,
  JobDescriptionLists,
  Row,
  Skill,
} from './experience.styles';

type TExperience = {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  isPresent: boolean;
  location: string;
  skills: string[];
  jobDescriptions: string[];
  isContentRight: boolean;
};

const Experience = () => {
  const experiences: TExperience[] = [
    {
      company: 'University of Indianapolis, Masters of Data Science Program',
      title: 'Firmware Engineering Intern',
      startDate: '2025',
      endDate: '2025',
      isPresent: false,
      location: 'Indianapolis, IN',
      skills: [
        'Embedded C',
        'Serial Bus',
        'PICK-IQ',
        'Firmware',
        'UI/UX',
        'Neural Networks',
      ],
      jobDescriptions: [
        'Embedded C firmware integrating with serial bus communication using the PICK-IQ protocol for multi-controller addressing and daisy-chained device control.',
        'Improved configuration UI to streamline firmware updates, device onboarding, and device ID assignment.',
        'System design directly influenced Endress+Hauser to develop a capital investment plan based on the proposed system.',
        'Beta tested neural networks and deep learning programs and tuning configurations for course curriculum.',
      ],
      isContentRight: false,
    },
    {
      company: 'Yamato Sushi & Hibachi Express',
      title: 'Manager',
      startDate: 'Mar 2020',
      endDate: 'Aug 2024',
      isPresent: false,
      location: 'Brownsburg, IN',
      skills: ['Operations', 'Inventory', 'Training', 'Customer Service'],
      jobDescriptions: [
        'Oversaw day-to-day operations, ensuring the smooth functioning of the store and maintaining high customer satisfaction.',
        'Conducted regular inventory checks to track stock levels, reducing shortages and ensuring timely restocking.',
        'Trained and mentored new employees, fostering a skilled and collaborative team.',
        'Handled cashier duties, including processing transactions and managing end-of-day cash reconciliations.',
      ],
      isContentRight: true,
    },
    {
      company: 'Chick-fil-A',
      title: 'Trainer',
      startDate: 'Jan 2023',
      endDate: 'Aug 2023',
      isPresent: false,
      location: 'Fishers, IN',
      skills: ['Training', 'Customer Service', 'Operations'],
      jobDescriptions: [
        'Trained and oversaw new team members, guiding them through company policies, delegating tasks, and ensuring adherence to operational procedures and customer service standards in a high-volume setting.',
        'Took customer orders, provided excellent service, and served drinks, managing fast-paced interactions and ensuring customer satisfaction.',
      ],
      isContentRight: false,
    },
  ];

  return (
    <ExperienceSectionContainer className="container" id="experience">
      <SectionHeading
        titleNumber="03"
        sectionTitle="experience"
        sectionDetails="An overview of my work experience."
      />
      <ExperienceContainer>
        <CenterLine />

        {experiences.map((experience, index) => (
          <Row key={index} $isContentRight={experience.isContentRight}>
            <ExperienceWrapper>
              <ExperiencePing />
              <ExperienceCircle />
            </ExperienceWrapper>

            {!experience.isContentRight ? (
              <>
                <ExperienceCard>
                  <ExperienceHeaderContent>
                    <Company>{experience.company}</Company>
                    <div>
                      <ExperienceDate>{experience.startDate}</ExperienceDate> -{' '}
                      {experience.isPresent === false ? (
                        <>
                          <ExperienceDate>{experience.endDate}</ExperienceDate>
                        </>
                      ) : (
                        <ExperienceDate>Present</ExperienceDate>
                      )}
                    </div>
                  </ExperienceHeaderContent>

                  <ExperienceDetails>
                    <ExperienceDetail>{experience.title}</ExperienceDetail>
                    &bull;
                    <ExperienceDetail>{experience.location}</ExperienceDetail>
                  </ExperienceDetails>
                  <JobDescriptionLists>
                    {experience.jobDescriptions.map((description) => {
                      return (
                        <JobDescriptionList key={description}>
                          {description}
                        </JobDescriptionList>
                      );
                    })}
                  </JobDescriptionLists>
                  <div style={{ marginTop: '.75rem' }}>
                    <Skill style={{ fontWeight: 600 }}>Skills: </Skill>{' '}
                    {experience.skills.map((skill, index) => {
                      return (
                        <React.Fragment key={skill}>
                          <Skill>{skill}</Skill>
                          {index < experience.skills.length - 1 && ', '}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </ExperienceCard>
                <EmptySection />
              </>
            ) : (
              <>
                <EmptySection />
                <ExperienceCard>
                  <ExperienceHeaderContent>
                    <Company>{experience.company}</Company>
                    <div>
                      <ExperienceDate>{experience.startDate}</ExperienceDate> -{' '}
                      {experience.isPresent === false ? (
                        <>
                          <ExperienceDate>{experience.endDate}</ExperienceDate>
                        </>
                      ) : (
                        <ExperienceDate>Present</ExperienceDate>
                      )}
                    </div>
                  </ExperienceHeaderContent>

                  <ExperienceDetails>
                    <ExperienceDetail>{experience.title}</ExperienceDetail>
                    &bull;
                    <ExperienceDetail>{experience.location}</ExperienceDetail>
                  </ExperienceDetails>
                  <JobDescriptionLists>
                    {experience.jobDescriptions.map((description) => {
                      return (
                        <JobDescriptionList key={description}>
                          {description}
                        </JobDescriptionList>
                      );
                    })}
                  </JobDescriptionLists>
                  <div style={{ marginTop: '.75rem' }}>
                    <Skill style={{ fontWeight: 600 }}>Skills: </Skill>{' '}
                    {experience.skills.map((skill, index) => {
                      return (
                        <React.Fragment key={skill}>
                          <Skill>{skill}</Skill>
                          {index < experience.skills.length - 1 && ', '}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </ExperienceCard>
              </>
            )}
          </Row>
        ))}
      </ExperienceContainer>
    </ExperienceSectionContainer>
  );
};

export default Experience;
