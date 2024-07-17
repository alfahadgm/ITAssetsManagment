import { AssetUpdateManyWithoutLocationsInput } from "./AssetUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  name?: string | null;
  address?: string | null;
  assets?: AssetUpdateManyWithoutLocationsInput;
};
