interface UserPurchase {
  id: number;
  item: string;
  price: number;
};

interface UserData {
  name: string,
  email: string,
  purchases: UserPurchase[];
}

export interface UserResponse {
  message: string;
  data: UserData;
};
