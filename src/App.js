import "./App.css";
import BudgetDescription from "./components/BudgetDescription";
import ExpenseList from "./components/ExpenseList";
// import Expenses from "./components/Expense";
function App() {
  return (
    <div className="App container box-border">
      <BudgetDescription/>
      <ExpenseList/>
    </div>
  );
}

export default App;
