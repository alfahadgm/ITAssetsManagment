/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Asset as PrismaAsset,
  Category as PrismaCategory,
  Manufacturer as PrismaManufacturer,
  Employee as PrismaEmployee,
  Location as PrismaLocation,
} from "@prisma/client";

export class AssetServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AssetCountArgs, "select">): Promise<number> {
    return this.prisma.asset.count(args);
  }

  async assets(args: Prisma.AssetFindManyArgs): Promise<PrismaAsset[]> {
    return this.prisma.asset.findMany(args);
  }
  async asset(args: Prisma.AssetFindUniqueArgs): Promise<PrismaAsset | null> {
    return this.prisma.asset.findUnique(args);
  }
  async createAsset(args: Prisma.AssetCreateArgs): Promise<PrismaAsset> {
    return this.prisma.asset.create(args);
  }
  async updateAsset(args: Prisma.AssetUpdateArgs): Promise<PrismaAsset> {
    return this.prisma.asset.update(args);
  }
  async deleteAsset(args: Prisma.AssetDeleteArgs): Promise<PrismaAsset> {
    return this.prisma.asset.delete(args);
  }

  async getCategory(parentId: string): Promise<PrismaCategory | null> {
    return this.prisma.asset
      .findUnique({
        where: { id: parentId },
      })
      .category();
  }

  async getManufacturer(parentId: string): Promise<PrismaManufacturer | null> {
    return this.prisma.asset
      .findUnique({
        where: { id: parentId },
      })
      .manufacturer();
  }

  async getEmployee(parentId: string): Promise<PrismaEmployee | null> {
    return this.prisma.asset
      .findUnique({
        where: { id: parentId },
      })
      .employee();
  }

  async getLocation(parentId: string): Promise<PrismaLocation | null> {
    return this.prisma.asset
      .findUnique({
        where: { id: parentId },
      })
      .location();
  }
}
