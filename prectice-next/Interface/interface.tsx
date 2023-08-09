import { Dispatch, SetStateAction } from "react";

export enum ROUTE {
  HOME = "home",
  MOBILE_PHONES = "mobilePhones",
  TRENDING_PHONES = "trendingPhones",
  FEATURED_PHONES = "featuredPhones",
  UPCOMING_TECHNOLOGIES = "upcomingTechnologies",
  COMPARE = "compare",
  BLOGS = "blogs",
  SEARCH = "search",
}

export interface productDataInterface {
  id: number;
  productName: string;
  productImage: string;
  price: string;
  scoreTag: string;
  brandName: string;
  category: string;
}

export interface AppContextInterface {
  searchResults: string;
  setSearchResults: Dispatch<SetStateAction<string>>;
  setFilterData: Dispatch<SetStateAction<productDataInterface[]>>;
  filterData: productDataInterface[];
}
