import { createContext } from "react";
import { AppContextInterface } from "../Interface/commonIterface";

export const appContext = createContext<AppContextInterface>({
  searchResults: "",
  setSearchResults: () => {},
  setFilterData: () => {},
  filterData: [],
});
