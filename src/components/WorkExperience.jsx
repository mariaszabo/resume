import styled from 'styled-components';
import ExperienceCard from './ExperienceCard';

const WorkExperience = () => {
  return (
    <div>
      <Title>Work experience</Title>
      <ExperienceList>
        <ExperienceCard
          title = "Founder"
          start = "Aug 2023"
          end = "Current..."
          CompanyLogo = "https://img.icons8.com/plasticine/100/mixer-logo.png"
          CompanyName = "Mars XDimension"
          location = "Craiova, RO"
          bulletPoints = {[
            'Teach',
            'Practice',
            'Make people happy',
            'Web Development',
            'Programming',
            'Getting jobs'
          ]}
          color = "#3DC39B"
        />
        <ExperienceCard 
            title = "Tech Lead"
            start = "Nov 2021"
            end = "Aug 2023"
            CompanyLogo = "https://img.icons8.com/color/48/nasa.png"
            CompanyName = "NASA"
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
            color = "#928CF8"
        />
        
        <ExperienceCard
            title = "Graphic designer"
            start = "Nov 2020"
            end = "Nov 2021"
            CompanyLogo = "https://img.icons8.com/color/48/cartoon_network.png"
            CompanyName = "Cartoon Network Studios"
            location = "Bucharest, RO"
            bulletPoints = {[
                'Visual Design',
                'Prototyping',
                'UX Researching',
                'ToonBoom',
                'Photoshop After Effects',
                'Design skills'
            ]}
            color = "#FE74A6"
        />
        <ExperienceCard 
            title = " Junior Software Developer"
            start = "June 2019"
            end = "Sep 2020"
            CompanyLogo = "https://img.icons8.com/clouds/100/axie-infinity.png"
            CompanyName = "Software Company"
            location = "Bucharest, RO"
            bulletPoints = {[
              'Visual Design',
              'Prototyping',
              'Researching',
              'Web / Mobile'
            ]}
            color = "#5B6DFF"
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
  