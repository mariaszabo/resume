import styled from 'styled-components';
import EducationCard from './EducationCard';

const Education = () => {
  return (
    <div>
      <Title>Education</Title>
      <EducationList>
        <EducationCard
            start = "2023"
            end = "2024"
            name = "tenxbase"
            description = "Front-End Developer Program"
        />
        <EducationCard
            start = "2021"
            end = "2024"
            name = "Universitatea din Craiova"
            description = "Informatică"
        />
      </EducationList>
    </div>
  )
}

export default Education;

const Title = styled.div`
  margin-top: 37px;
  margin-left: 71px;
  margin-bottom: 23px;
  
  color: #0B0B0B;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
