import styled from 'styled-components';
import SkillsCard from './SkillsCard';

const Skills = () => {
  return (
    <div>
      <Title>Skills</Title>
      <SkillsList>
        <SkillsCard
            title = "Software"
            description = "VSCode, Docker, Github, Figma, APIs. "
        />
        <SkillsCard
            title = "Front-end"
            description = "HTML, CSS, Javascript, Typescript, React, Redux, styled-components, axios."
        />
        <SkillsCard
            title = "I Can"
            description = "Translate Figma designs into code,
          Build interactive websites,
          Consume third party APIs,
          andddddd more ;)"
        />
      </SkillsList>
    </div>
  )
}

export default Skills;

const Title = styled.div`
  margin-top: 45px;
  margin-left: 71px;
  margin-bottom: 23px;
  
  color: #0B0B0B;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
`;