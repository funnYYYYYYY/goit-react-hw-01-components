import styled from 'styled-components';

const ListItem = styled.thead`
  text-align: center;
  border: 1px solid;
  margin-top: 25px;
  background-color: aquamarine;
`;

const Item = styled.th`
  margin-top: 25px;
`;

const List = styled.td`
  border: 1px solid;
  padding-left: 100px;
  padding-right: 100px;
`;

export { ListItem, List, Item };
