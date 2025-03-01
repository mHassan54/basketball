export interface Player {
  id: string | number;
  name: string;
  position: string;
  age: number;
  country: string;
  image: string;
  number?: number;
  height?: number;
  wight?: number;
  salary?: number;
  contract?: string;
}

export type PositionFilter = {
  label: string | number;
  value: string | number;
}