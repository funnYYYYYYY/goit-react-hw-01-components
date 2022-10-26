export const TransactionHistory = ({ items }) => {
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>;
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({ id, amount, type, currency }) => {
        return (
          <tbody key={id}>
            <tr>
              <th>{type}</th>
              <th>{amount}</th>
              <th>{currency}</th>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};
