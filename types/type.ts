export type data = {
  name: string;
  email: string;
  sex: string;
  age: number;
  pref: number;
  shop: string;
  satisfaction: string;
  frequency: string;
  other: string;
};

export type shop = {
  shop: string[];
};

export type selectList = { label: string; value: any }[];
