import styled from 'styled-components';

const EducationCard = (props) => {
  return (
    <Container>
      <Period>{props.start} - {props.end}</Period>
      <Name>{props.name}</Name>
      <Description>{props.description}</Description>
    </Container>
  )
}


export default EducationCard;

const Container =  styled.div`
  margin-left: 71px;
  margin-right: 40px;
  display: inline-flex;
  padding: 21px 55px 22px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;

  border: 3px solid #211814;
  background: #FFE9A8;
  box-shadow: -10px 10px 0px 0px rgba(0, 0, 0, 0.15);
`;

const Period = styled.span`
  color: #595959;
  font-family: 'Source Sans 3';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 18.2px */
`;

const Name = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const Description = styled.p`
  color: #595959;
  font-family: 'Source Sans 3';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;