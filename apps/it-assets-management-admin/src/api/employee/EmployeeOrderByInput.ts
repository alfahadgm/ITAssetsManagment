import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  lastName?: SortOrder;
  firstName?: SortOrder;
};