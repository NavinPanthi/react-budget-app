
import Expense from "./Expense";
const ExpenseList = (props) => {
  const expenseList = [
    { id: 0, name: "Travel", cost: 30 },
    { id: 1, name: "Breakfast", cost: 50 },
    { id: 3, name: "Clothes", cost: 50 },
    { id: 3, name: "Dinner", cost: 20 },
    { id: 4, name: "Drinks", cost: 80 },
    { id: 5, name: "Tea", cost: 90 },
  ];

  return (
    <div className="mt-9 ">
      <p className="text-xl font-semibold">Budget Expenses</p>
      <ul className="border border-gray-300 grid grid-cols-1 divide-y rounded overflow-hidden text-sm mt-5 ">
        {expenseList.map((expense) => (
          <Expense key={expense.name} id={expense.id} name={expense.name} cost={expense.cost} />
        ))}
      </ul>
    </div>
  );
};
export default ExpenseList;
