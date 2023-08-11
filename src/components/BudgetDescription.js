import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const BudgetDescription = () => {
  const { expenses, budget } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  const { dispatch } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const ok =
    totalExpenses > budget
      ? "bg-rose-200 border-rose-300 "
      : "bg-green-200 border-green-300";
  const handleChange = (e) => {
    dispatch({ type: "EDIT_BUDGET", payload: e.target.value });
  };
  let budgetContent;
  if (isEditing) {
    budgetContent = (
      <>
        <input
          required="required"
          type="text"
          id="name"
          className="placeholder:italic font-normal placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md mr-4 py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 500 focus:ring-sky-500 focus:ring-1 text-sm"
          placeholder="Enter budget amount"
          onChange={handleChange}
        />
        <button
          className="px-5 py-1 text-sm bg-white font-semibold rounded border border-slate-400  hover:text-white hover:bg-slate-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-outset-2"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    budgetContent = (
      <>
        Budget: Rs.{budget}
        <button
          className="px-5 py-1 text-sm bg-white font-semibold rounded border border-slate-400  hover:text-white hover:bg-slate-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-outset-2"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <div>
      <p className="text-5xl mt-3  font-semibold "> My budget App</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 mt-9">
        <div className="px-5 bg-slate-300 border border-slate-400 rounded h-12 flex items-center justify-between text-md font-semibold">
          {budgetContent}
        </div>
        <div
          className={`text-center  px-5 border ${ok} h-12 rounded flex items-center  text-md font-semibold`}
        >
          Remaining: Rs.{budget - totalExpenses}
        </div>
        <div className="text-center px-5 bg-rose-200 border border-rose-300 h-12 rounded flex items-center  text-md font-semibold">
          Spent: Rs.{totalExpenses}
        </div>
      </div>
    </div>
  );
};
export default BudgetDescription;
