import { createContext, useContext, useReducer, useState } from "react";
import { data } from "../utils/data";

const DataContext = createContext();

const initialState = {
  items: data,
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };
    default:
      return state;
  }
};

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  console.log("🚀 ~ DataContextProvider ~ state:", state);
  const [selectedItem, setSelectedItem] = useState(null);
  console.log("🚀 ~ DataContextProvider ~ selectedItem:", selectedItem);

  const handleEdit = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <DataContext.Provider
      value={{ state, dispatch, selectedItem, handleEdit, closeModal }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
