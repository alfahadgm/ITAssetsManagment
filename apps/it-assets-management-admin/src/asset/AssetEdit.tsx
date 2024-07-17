import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { ManufacturerTitle } from "../manufacturer/ManufacturerTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { LocationTitle } from "../location/LocationTitle";

export const AssetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="serialNumber" source="serialNumber" />
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="purchaseDate" source="purchaseDate" />
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="manufacturer.id"
          reference="Manufacturer"
          label="Manufacturer"
        >
          <SelectInput optionText={ManufacturerTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="location.id"
          reference="Location"
          label="Location"
        >
          <SelectInput optionText={LocationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
