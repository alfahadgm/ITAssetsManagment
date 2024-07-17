import { SortOrder } from "../../util/SortOrder";

export type AssetOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  serialNumber?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  purchaseDate?: SortOrder;
  categoryId?: SortOrder;
  manufacturerId?: SortOrder;
  employeeId?: SortOrder;
  locationId?: SortOrder;
};
