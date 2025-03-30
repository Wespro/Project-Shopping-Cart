export interface item {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { count: number; rate: number };
}
export type items = {
  items: item[];
  setItems: React.Dispatch<React.SetStateAction<item[]>>;
};

export type itemsContext = {
  items: item[];
  setItems: React.Dispatch<React.SetStateAction<item[]>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

export type cartItemType = {
  item: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { count: number; rate: number };
  };
  quantity: number;
};

export type cartItemsObjContext = {
  cartItemsObj: { [key: number]: cartItemType };
  setCartItemsObj: React.Dispatch<
    React.SetStateAction<{ [key: number]: cartItemType }>
  >;
};
export interface CardImageProps {
  itemimage: string;
}

export interface FilterCompPropsType {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  priceFilter: number;
  setPriceFilter: React.Dispatch<React.SetStateAction<number>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  filteredItems: item[];
}
