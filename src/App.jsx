import { Header } from "./component/Header";
import { Balance } from "./component/Balance";
import { Incomee } from "./component/Incomee";
import { TransactionList } from "./component/TransactionList";
import { AddTransaction } from "./component/AddTransaction";
import useThemeStore from "./store/ThemeStore";
import {AddUser} from "./component/AddUser";


function App() {
  const theme = useThemeStore(
    (state) => state.theme
  );

  const themes = {
    blue: "bg-blue-300 text-black",
    green: "bg-green-300 text-black",
    purple: "bg-purple-300 text-black",
    dark: "bg-slate-900 text-black",
    red: "bg-red-300 text-black",
  };

  return (
    <div className={`min-h-screen ${themes[theme]} p-8`}>
  <div className="mx-auto max-w-6xl rounded-xl bg-white p-6">

    <Header />

    <div className="mt-6 grid grid-cols-3 gap-6">

      <div>
        <AddUser />
      </div>

      <div className="col-span-2">
        <Balance />
        <Incomee />
        <TransactionList />
        <AddTransaction />
      </div>

    </div>

  </div>
</div>
  );
}

export default App;