import { AssetCreateNestedManyWithoutEmployeesInput } from "./AssetCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  email?: string | null;
  lastName?: string | null;
  firstName?: string | null;
  assets?: AssetCreateNestedManyWithoutEmployeesInput;
};
