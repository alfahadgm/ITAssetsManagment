/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { AssetUpdateManyWithoutLocationsInput } from "./AssetUpdateManyWithoutLocationsInput";
import { Type } from "class-transformer";

@InputType()
class LocationUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: () => AssetUpdateManyWithoutLocationsInput,
  })
  @ValidateNested()
  @Type(() => AssetUpdateManyWithoutLocationsInput)
  @IsOptional()
  @Field(() => AssetUpdateManyWithoutLocationsInput, {
    nullable: true,
  })
  assets?: AssetUpdateManyWithoutLocationsInput;
}

export { LocationUpdateInput as LocationUpdateInput };
