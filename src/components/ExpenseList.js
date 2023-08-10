import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Expense from "./Expense";
const ExpenseList = (props) => {
  const { expenses } = useContext(AppContext);

  return (
    <div className="mt-9 ">
      <p className="text-xl font-semibold">Budget Expenses</p>
      <ul className="border border-gray-300 grid grid-cols-1 divide-y rounded overflow-hidden text-sm mt-5 ">
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
