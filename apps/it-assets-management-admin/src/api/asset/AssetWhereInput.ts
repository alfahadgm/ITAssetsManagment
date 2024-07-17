import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ManufacturerWhereUniqueInput } from "../manufacturer/ManufacturerWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type AssetWhereInput = {
  id?: StringFilter;
  serialNumber?: StringNullableFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  purchaseDate?: DateTimeNullableFilter;
  category?: CategoryWhereUniqueInput;
  manufacturer?: ManufacturerWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
  location?: LocationWhereUniqueInput;
};
