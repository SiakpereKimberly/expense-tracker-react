import useExpenseStore from "../store/ExpenseStore";

export const Incomee = () => {
  const users = useExpenseStore((state) => state.users);

  const selectedUserId = useExpenseStore(
    (state) => state.selectedUserId
  );

  const selectedUser = users.find(
    (user) => user.id === selectedUserId
  );

  const transactions =
    selectedUser?.transactions || [];

  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((sum, transaction) => sum + transaction.amount, 0)
    .toFixed(2);

  const expense = (
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((sum, transaction) => sum + transaction.amount, 0) * -1
  ).toFixed(2);

  return (
    <div className="max-w-2xl mx-auto mt-4 px-6">
      <div className="flex rounded-md border bg-white">
        <div className="flex-1 border-r border-slate-300 p-4 text-center">
          <h4 className="text-2xl font-bold">Income</h4>
          <p className="text-2xl font-bold text-green-600">
            ${income}
          </p>
        </div>

        <div className="flex-1 p-4 text-center">
          <h4 className="text-2xl font-bold">Expense</h4>
          <p className="text-2xl font-bold text-red-600">
            ${expense}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Incomee;