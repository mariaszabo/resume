import styled from 'styled-components';

const Hobby = () => { 
  return (
    <Container>
      <Title>Hobby</Title>
      <Content>Reading./ .. Learning ./.. Music ./.. Turkish dramas</Content>
    </Container>
  )  
}

export default Hobby;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  gap: 10px;

  margin-top: 49px;
  margin-left: 43px;
  margin-bottom: 13px;
  padding-bottom: 20px;
`;

const Title = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 100%; /* 18px */
`;

const Content = styled.div`
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: 100%;
`;