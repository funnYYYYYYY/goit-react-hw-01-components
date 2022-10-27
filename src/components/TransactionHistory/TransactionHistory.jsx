import { ListItem, List, Item } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  <table>
    <ListItem>
      <tr>
        <Item>Type</Item>
        <Item>Amount</Item>
        <Item>Currency</Item>
      </tr>
    </ListItem>
  </table>;
  return (
    <table>
      <ListItem>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </ListItem>
      {items.map(({ id, amount, type, currency }) => {
        return (
          <tbody key={id}>
            <tr>
              <List>{type}</List>
              <List>{amount}</List>
              <List>{currency}</List>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

//  {items.map(({ id, amount, type, currency }) => {
//         return (
//           <tbody key={id}>
//             <tr>
//               <th>{type}</th>
//               <th>{amount}</th>
//               <th>{currency}</th>
//             </tr>
//           </tbody>
