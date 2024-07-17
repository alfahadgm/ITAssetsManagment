import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AssetListRelationFilter } from "../asset/AssetListRelationFilter";

export type EmployeeWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  lastName?: StringNullableFilter;
  firstName?: StringNullableFilter;
  assets?: AssetListRelationFilter;
};
