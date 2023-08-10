import "./App.css";
import AddExpense from "./components/AddExpense";
import BudgetDescription from "./components/BudgetDescription";
import ExpenseList from "./components/ExpenseList";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App container box-border">
        <BudgetDescription />
        <ExpenseList />
        <AddExpense />
      </div>
    </AppProvider>
  );
}

export default App;
