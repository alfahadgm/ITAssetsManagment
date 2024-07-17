/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AssetWhereUniqueInput } from "../../asset/base/AssetWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AssetUpdateManyWithoutManufacturersInput {
  @Field(() => [AssetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AssetWhereUniqueInput],
  })
  connect?: Array<AssetWhereUniqueInput>;

  @Field(() => [AssetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AssetWhereUniqueInput],
  })
  disconnect?: Array<AssetWhereUniqueInput>;

  @Field(() => [AssetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AssetWhereUniqueInput],
  })
  set?: Array<AssetWhereUniqueInput>;
}

export { AssetUpdateManyWithoutManufacturersInput as AssetUpdateManyWithoutManufacturersInput };
