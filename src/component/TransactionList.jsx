import useExpenseStore from "../store/ExpenseStore";

export const TransactionList = () => {
const users = useExpenseStore((state) => state.users);

const selectedUserId = useExpenseStore(
  (state) => state.selectedUserId
);

const selectedUser = users.find(
  (user) => user.id === selectedUserId
);
const deleteTransaction = useExpenseStore( (state) => state.deleteTransaction );

const transactions = selectedUser?.transactions || [];
  return (
    <div className="max-w-2xl mx-auto mt-4 px-6">
      <h3 className="text-left text-2xl font-bold">History</h3>

      <hr className="mt-2 border-t border-slate-300" />

      <ul className="mt-4 flex flex-col gap-1 list-none">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={`group relative flex items-center justify-between gap-4 py-2 bg-white px-4 shadow ${
              transaction.amount < 0
                ? "border-r-4 border-red-500"
                : "border-r-4 border-green-500"
            }`}
          >
            <button
              type="button"
              onClick={() => deleteTransaction(transaction.id)}
              className="
              absolute
              left-0
              cursor-pointer
              border-0
              bg-red-500
              px-2
              py-[2px]
              text-white
              text-xl
              opacity-0
              transition-opacity
              group-hover:opacity-100
            "
            >
              x
            </button>

            <span>{transaction.text}</span>

            <span
              className={`font-bold ${
                transaction.amount < 0 ? "text-red-600" : "text-green-600"
              }`}
            >
              ${transaction.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
