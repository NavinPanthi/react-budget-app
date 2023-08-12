import { useContext, useState } from "react";
import "./../App.css";
import { AppContext } from "../context/AppContext";
const BudgetDescription = () => {
  const { expenses, budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const alert =
    totalExpenses > budget
      ? "bg-rose-700 border-rose-200 "
      : "bg-green-700 border-green-200";
  const handleChange = (e) => {
    dispatch({ type: "EDIT_BUDGET", payload: e.target.value });
  };
  const remaining = budget - totalExpenses;
  // For bar.
  const width1 = (remaining / budget) * 100;
  const width2 = 100 - width1;
  let firstWidth = {
    width: `${width1}%`,
  };
  let secondWidth = {
    width: `${width2}%`,
  };
  let budgetContent;
  if (isEditing) {
    budgetContent = (
      <>
        <input
          required="required"
          type="text"
          id="name"
          value={budget}
          className="placeholder:italic font-normal placeholder:text-slate-500 text-slate-500 block bg-white w-full border border-slate-300 rounded-md mr-4 py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 500 focus:ring-sky-500 focus:ring-1 text-sm"
          placeholder="Enter budget amount"
          onChange={handleChange}
        />
        <button
          className="px-5 py-1 text-sm bg-white font-semibold rounded border border-slate-400  hover:text-white hover:bg-slate-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-outset-2 text-black"
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
          className="px-5 py-1 text-sm bg-white text-black font-semibold rounded border border-slate-400  hover:text-white hover:bg-slate-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-outset-2"
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
        <div className="px-5 bg-slate-700 border text-white border-slate-400 rounded h-12 flex items-center justify-between text-md font-semibold">
          {budgetContent}
        </div>
        <div
          className={`text-center  px-5 border ${alert} h-12 text-white rounded flex items-center  text-md font-semibold`}
        >
          Remaining: Rs.{remaining}
        </div>
        <div className="text-center px-5 text-white bg-rose-700 border border-rose-300 h-12 rounded flex items-center  text-md font-semibold">
          Spent: Rs.{totalExpenses}
        </div>
      </div>
      <div className="min-w-max mt-4 text-xs flex items-center justify-center   w-full text-white rounded-full ">
        <div
          className={`w-50 first bg-green-700   text-center ${
            width1 === 100 ? "rounded-full" : "rounded-l-full"
          }`}
          style={firstWidth}
        >
          Remaining
        </div>
        <div
          className={`bg-rose-700 second rounded-r-full  text-center ${
            width2 === 100 ? "rounded-full" : "rounded-r-full"
          }`}
          style={secondWidth}
        >
          Spent
        </div>
      </div>
    </div>
  );
};
export default BudgetDescription;
