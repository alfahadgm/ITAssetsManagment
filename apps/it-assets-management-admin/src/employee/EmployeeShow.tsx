import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { MANUFACTURER_TITLE_FIELD } from "../manufacturer/ManufacturerTitle";
import { EMPLOYEE_TITLE_FIELD } from "./EmployeeTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";

export const EmployeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="email" source="email" />
        <TextField label="lastName" source="lastName" />
        <TextField label="firstName" source="firstName" />
        <ReferenceManyField
          reference="Asset"
          target="employeeId"
          label="Assets"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="serialNumber" source="serialNumber" />
            <TextField label="name" source="name" />
            <TextField label="description" source="description" />
            <TextField label="purchaseDate" source="purchaseDate" />
            <ReferenceField
              label="Category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Manufacturer"
              source="manufacturer.id"
              reference="Manufacturer"
            >
              <TextField source={MANUFACTURER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Location"
              source="location.id"
              reference="Location"
            >
              <TextField source={LOCATION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
