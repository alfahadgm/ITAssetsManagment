import { AssetUpdateManyWithoutEmployeesInput } from "./AssetUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  email?: string | null;
  lastName?: string | null;
  firstName?: string | null;
  assets?: AssetUpdateManyWithoutEmployeesInput;
};
