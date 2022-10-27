import styled from 'styled-components';

const Container = styled.ul`
  list-style: none;
  border: 1px solid red;
  margin: 20px;
  padding: 25px;
`;

const Online = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => (props.color ? props.color : 'aqua')};
`;

const Name = styled.p`
  margin-right: 20px;
`;

const List = styled.li`
  align-items: center;
  display: flex;
  border-radius: 5px;
  background-color: #9b8f8f;
  margin-top: 15px;
  width: 350px;
`;

const Image = styled.img`
  margin-right: 20px;
  margin-left: 20px;
`;

export { Online, Container, Name, List, Image };
