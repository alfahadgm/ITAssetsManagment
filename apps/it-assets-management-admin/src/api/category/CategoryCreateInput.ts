import { AssetCreateNestedManyWithoutCategoriesInput } from "./AssetCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  assets?: AssetCreateNestedManyWithoutCategoriesInput;
  description?: string | null;
};
