import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Expense from "./Expense";
import Search from "./Search";
const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <div className="mt-9 ">
      <p className="text-xl font-semibold">Budget Expenses</p>
      <Search />
      <ul className="border border-gray-300 grid grid-cols-1 divide-y rounded overflow-hidden text-sm mt-3 ">
        {expenses.map((expense) => (
          <Expense
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </div>
  );
};
export default ExpenseList;
