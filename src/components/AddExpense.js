const AddExpense = () => {
  return (
    <div className="mt-9 mb-9">
      <p className="text-xl font-semibold mb-5">Add Expense</p>
      <form>
        <div className="flex flex-col mb-3">
          <label htmlFor="name" className="text-sm mb-1 font-medium">
            Name
          </label>
          <input
            required="required"
            type="text"
            id="name"
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 500 focus:ring-sky-500 focus:ring-1 text-sm"
            placeholder="Enter a expense title."
          ></input>
        </div>
        <div>
          <label htmlFor="name" className="text-sm font-medium mb-1">
            Cost
          </label>
          <input
            required="required"
            type="text"
            id="name"
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 500 focus:ring-sky-500 focus:ring-1 text-sm"
            placeholder="Enter the cost for the expense."
          ></input>
        </div>
        <div>
          <button className="px-4 py-2 mt-3 text-sm w-full font-semibold rounded-md bg-slate-600 text-white border border-slate-300  hover:bg-slate-700 hover:border-transparent focus:outline-none focus:ring-2 focus:border-sky-500 focus:ring-offset-1">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddExpense;
