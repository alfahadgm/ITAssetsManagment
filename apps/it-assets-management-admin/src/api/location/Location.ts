import { Asset } from "../asset/Asset";

export type Location = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  address: string | null;
  assets?: Array<Asset>;
};
