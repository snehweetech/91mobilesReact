import { Dispatch, SetStateAction } from "react";
import { productDataInterface } from "./productInterface";

export enum ROUTE {
  HOME = "home",
  MOBILE_PHONES = "mobile-phones",
  TRENDING_PHONES = "trending-phones",
  FEATURED_PHONES = "featured-phones",
  UPCOMING_TECHNOLOGIES = "upcoming-technologies",
  COMPARE = "compare",
  BLOGS = "blogs",
  SEARCH = "search",
}

export interface AppContextInterface {
  searchResults: string;
  setSearchResults: Dispatch<SetStateAction<string>>;
  setFilterData: Dispatch<SetStateAction<productDataInterface[]>>;
  filterData: productDataInterface[];
}
