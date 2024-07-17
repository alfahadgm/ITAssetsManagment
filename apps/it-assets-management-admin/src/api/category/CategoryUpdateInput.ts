import { AssetUpdateManyWithoutCategoriesInput } from "./AssetUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  assets?: AssetUpdateManyWithoutCategoriesInput;
  description?: string | null;
};
