import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AssetListRelationFilter } from "../asset/AssetListRelationFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  assets?: AssetListRelationFilter;
  description?: StringNullableFilter;
};
