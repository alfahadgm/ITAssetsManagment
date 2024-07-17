import { Category } from "../category/Category";
import { Manufacturer } from "../manufacturer/Manufacturer";
import { Employee } from "../employee/Employee";
import { Location } from "../location/Location";

export type Asset = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  serialNumber: string | null;
  name: string | null;
  description: string | null;
  purchaseDate: Date | null;
  category?: Category | null;
  manufacturer?: Manufacturer | null;
  employee?: Employee | null;
  location?: Location | null;
};
