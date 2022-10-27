import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
  padding: 20px;
  background-color: #efeaea;
`;

const Items = styled.ul`
  list-style: none;
  display: flex;
  background-color: grey;
`;

const List = styled.li`
  display: grid;
  margin-right: 40px;
  color: green;
`;

const Param = styled.p`
  text-align: center;
  font-style: italic;
  color: #b5315e;
`;

export { Container, Items, List, Param };
