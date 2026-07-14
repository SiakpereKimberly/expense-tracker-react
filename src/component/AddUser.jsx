import { useState } from "react";
import useExpenseStore from "../store/ExpenseStore";

export const AddUser = () => {
  const [name, setName] = useState("");

const users = useExpenseStore(
  (state) => state.users
);
  
const addUser = useExpenseStore(
  (state) => state.addUser
);

const deleteUser = useExpenseStore(
  (state) => state.deleteUser
);

const selectedUserId = useExpenseStore(
  (state) => state.selectedUserId
);

const selectUser = useExpenseStore(
  (state) => state.selectUser
);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    addUser(name);

    setName("");
  };
console.log("Users:", users);
console.log("Selected User:", selectedUserId);
  return (
    <div className="max-w-2xl mx-auto mt-4 px-6">
      <h2 className="mb-6 text-3xl font-bold">👥 Users</h2>
      <hr className="my-8" />
      <h3 className="mb-4 text-xl font-semibold">
        Add New User
      </h3>
      <form
        onSubmit={handleSubmit}
        className="mt-4 flex gap-2"
      >
        <input
          type="text"
          placeholder="User Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="flex-1 rounded border p-2"
        />

        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Add
        </button>
      </form>
      <p className="mb-6 text-gray-500">
        {users.length} Registered Users
      </p>
      <h3 className="mt-6 text-xl font-bold">
        Registered Users
      </h3>
      <ul className="mt-4 flex flex-col gap-2">
            {users.map((user) => (
          <li
  key={user.id}
  onClick={() => {
    console.log("Clicked:", user.name);
    selectUser(user.id);
  }}
  className={`flex items-center justify-between cursor-pointer rounded-lg border p-3 shadow ${
    selectedUserId === user.id
      ? "border-blue-500"
      : "border-slate-200"
  }`}
>
          <p className="font-semibold">{user.name}</p>

         
          <button
            onClick={(e) => {e.stopPropagation(); deleteUser(user.id)}}
            className="rounded bg-red-500 px-2 py-1 text-white">Delete
          </button>
    </li>
  ))}
</ul>
 
  
    </div>
  );
};

export default AddUser;