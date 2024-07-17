import { AssetCreateNestedManyWithoutManufacturersInput } from "./AssetCreateNestedManyWithoutManufacturersInput";

export type ManufacturerCreateInput = {
  description?: string | null;
  name?: string | null;
  assets?: AssetCreateNestedManyWithoutManufacturersInput;
};
