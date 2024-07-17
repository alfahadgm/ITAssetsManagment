import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AssetListRelationFilter } from "../asset/AssetListRelationFilter";

export type LocationWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  address?: StringNullableFilter;
  assets?: AssetListRelationFilter;
};
