import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ManufacturerWhereUniqueInput } from "../manufacturer/ManufacturerWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type AssetUpdateInput = {
  serialNumber?: string | null;
  name?: string | null;
  description?: string | null;
  purchaseDate?: Date | null;
  category?: CategoryWhereUniqueInput | null;
  manufacturer?: ManufacturerWhereUniqueInput | null;
  employee?: EmployeeWhereUniqueInput | null;
  location?: LocationWhereUniqueInput | null;
};
