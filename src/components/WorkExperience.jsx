import styled from 'styled-components';
import ExperienceCard from './ExperienceCard';

const WorkExperience = () => {
  return (
    <div>
      <Title>Work experience</Title>
      <ExperienceList>
        <ExperienceCard
          title = "Co-Founder"
          start = "Aug 2023"
          end = "Current..."
          CompanyLogo = "https://img.icons8.com/plasticine/100/mixer-logo.png"
          CompanyName = "tenxbase"
          location = "Bucharest, RO"
          bulletPoints = {[
            'Teach',
            'Practice',
            'Repeat',
            'Web Development',
            'Programming',
            'Getting jobs'
          ]}
        />
        <ExperienceCard 
            title = "Tech Lead"
            start = "Nov 2019"
            end = "Aug 2023"
            CompanyLogo = "https://img.icons8.com/ultraviolet/40/000000/change.png"
            CompanyName = "Software Company"
            location = "Bucharest, RO"
            bulletPoints = {[
              'Visual Design',
              'Prototyping',
              'UX Researching',
              'Front-end Dev',
              'Unity 3D Models',
              'Principle',
              'Presenations',
              'Web / Mobile'
            ]}
        />
        <ExperienceCard
            title = "Senior Software Developer"
            start = "Nov 2017"
            end = "Nov 2019"
            CompanyLogo = "https://img.icons8.com/nolan/64/1A6DFF/C822FF/cards.png"
            CompanyName = "Software Company"
            location = "Bucharest, RO"
            bulletPoints = {[
                'Visual Design',
                'Prototyping',
                'UX Researching',
                'Principle',
                'Web / Mobile',
                'Front-end Dev'
            ]}
        />
        <ExperienceCard 
            title = "Softare Developer"
            start = "June 2016"
            end = "Sep 2017"
            CompanyLogo = "https://img.icons8.com/clouds/100/axie-infinity.png"
            CompanyName = "Software Company"
            location = "Bucharest, RO"
            bulletPoints = {[
              'Visual Design',
              'Prototyping',
              'Researching',
              'Web / Mobile'
            ]}
        />
      </ExperienceList>
    </div>
  )
}

export default WorkExperience;

const Title = styled.div`
  margin-left: 58px;
  margin-bottom: 23px;
  color: #0B0B0B;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
  