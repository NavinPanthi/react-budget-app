import { useContext } from "react";
import { AppContext } from "../context/AppContext";
const BudgetDescription = () => {
  return (
    <div>
      <p className="text-5xl mt-3  font-semibold "> My budget App</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 mt-9">
        <div className="px-5 bg-slate-300 border border-slate-400 rounded h-12 flex items-center justify-between text-md font-semibold">
          Budget: Rs.456
          <button className="px-5 py-1 text-sm bg-white font-semibold rounded border border-slate-400  hover:text-white hover:bg-slate-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-outset-2">
            Edit
          </button>
        </div>
        <div className="text-center  px-5 bg-green-200 border border-green-300 h-12 rounded flex items-center  text-md font-semibold">
          Remaining: Rs.56
        </div>
        <div className="text-center px-5 bg-rose-200 border border-rose-300 h-12 rounded flex items-center  text-md font-semibold">
          Spent: Rs. 400
        </div>
      </div>
    </div>
  );
};
export default BudgetDescription;
