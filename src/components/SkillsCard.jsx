import styled from 'styled-components';

const SkillsCard = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Container>
  )
}

export default SkillsCard;

const Container = styled.div`
  margin-left: 71px;
  margin-right: -7px;
  display: flex;
  
  padding: 25px 73px 25px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 14px;

  border: 3px solid #211814;
  background: #FFE9A8;
  box-shadow: -10px 10px 0px 0px rgba(0, 0, 0, 0.15);
`;

const Title = styled.div`
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const Description = styled.div`
  color: #595959;
  font-family: 'Source Sans 3';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;