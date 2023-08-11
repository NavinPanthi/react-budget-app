import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "INCREMENT_NEXT_ID":
      return {
        ...state,
        nextId: state.nextId + 1,
      };
    case "DELETE_EXPENSE":
      // return{
      //   return tasks.filter((t) => t.id !== action.id);
      // };
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

const initialState = {
  nextId: 6,
  budget: 5000,
  expenses: [
    { id: 0, name: "shopping", cost: 1000 },
    { id: 1, name: "travel", cost: 2000 },
    { id: 2, name: "Breakfast", cost: 300 },
    { id: 3, name: "Clothes", cost: 300 },
    { id: 4, name: "Drinks", cost: 200 },
    { id: 5, name: "Tea", cost: 200 },
  ],
};
export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        nextId: state.nextId,
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
