import { AssetUpdateManyWithoutManufacturersInput } from "./AssetUpdateManyWithoutManufacturersInput";

export type ManufacturerUpdateInput = {
  description?: string | null;
  name?: string | null;
  assets?: AssetUpdateManyWithoutManufacturersInput;
};
