import { Asset } from "../asset/Asset";

export type Manufacturer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  name: string | null;
  assets?: Array<Asset>;
};
