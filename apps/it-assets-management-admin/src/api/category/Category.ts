import { Asset } from "../asset/Asset";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  assets?: Array<Asset>;
  description: string | null;
};
