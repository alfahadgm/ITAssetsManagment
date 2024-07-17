import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AssetListRelationFilter } from "../asset/AssetListRelationFilter";

export type ManufacturerWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  name?: StringNullableFilter;
  assets?: AssetListRelationFilter;
};
