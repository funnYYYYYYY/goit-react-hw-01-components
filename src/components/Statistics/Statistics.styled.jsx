import styled from 'styled-components';

const Container = styled.section`
  border: 1px solid black;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0px;
  margin: 0px;
`;

const Title = styled.h1`
  text-align: center;
`;

const Item = styled.li`
  width: 170px;
  height: 170px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export { Container, List, Title, Item };
