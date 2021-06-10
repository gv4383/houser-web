export interface ApiHouse {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipcode: number;
  image_url: string;
  monthly_mortgage: number;
  monthly_rent: number;
}

export interface House {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipcode: number;
  imageUrl: string;
  monthlyMortgage: number;
  monthlyRent: number;
}
