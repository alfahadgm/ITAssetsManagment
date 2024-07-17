import { AssetCreateNestedManyWithoutLocationsInput } from "./AssetCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  name?: string | null;
  address?: string | null;
  assets?: AssetCreateNestedManyWithoutLocationsInput;
};
