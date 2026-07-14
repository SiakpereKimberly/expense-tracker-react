import useExpenseStore from "../store/ExpenseStore";

export const Balance = () => {
  const users = useExpenseStore((state) => state.users);

  const selectedUserId = useExpenseStore(
    (state) => state.selectedUserId
  );

  const selectedUser = users.find(
    (user) => user.id === selectedUserId
  );

  const transactions =
    selectedUser?.transactions || [];

  const total = transactions
    .reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    )
    .toFixed(2);

  return (
    <div>
      <h2 className="mt-4 text-center text-2xl font-bold">
        Your Balance
      </h2>

      <h2 className="mt-4 text-center text-4xl font-bold">
        ${total}
      </h2>
    </div>
  );
};

export default Balance;
