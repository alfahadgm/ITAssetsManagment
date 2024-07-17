import { Asset } from "../asset/Asset";

export type Employee = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  lastName: string | null;
  firstName: string | null;
  assets?: Array<Asset>;
};
