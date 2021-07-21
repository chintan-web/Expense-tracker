import "./App.css";
import AddTransection from "./components/AddTransection";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpences from "./components/IncomeExpences";
import TransectionList from "./components/TransectionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpences />
        <TransectionList />
        <AddTransection />
      </div>
    </GlobalProvider>
  );
}

export default App;
