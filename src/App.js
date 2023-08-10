import "./App.css";
import AddExpense from "./components/AddExpense";
import BudgetDescription from "./components/BudgetDescription";
import ExpenseList from "./components/ExpenseList";
// import Expenses from "./components/Expense";
function App() {
  return (
    <div className="App container box-border">
      <BudgetDescription/>
      <ExpenseList/>
      <AddExpense/>
    </div>
  );
}

export default App;
