import { TiDelete } from "react-icons/ti";

const Expense = (props) => {
  
  return (
    <li
      key={props.id}
      className="flex text-left  flex-row justify-between pl-5 items-center h-10 odd:bg-white even:bg-slate-50 "
    >
      <p className="">{props.name} </p>

      <div className="flex pr-5 font-semibold flex-row justify-around">
        <div className="min-w-max  text-xs flex items-center justify-center px-3 text-white rounded-full bg-rose-500">Rs. {props.cost}</div>
        <TiDelete className="ml-4 cursor-pointer" size="1.5em"></TiDelete>
      </div>
    </li>
  );
};
export default Expense;
