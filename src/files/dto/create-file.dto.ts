import { ApiProperty } from "@nestjs/swagger";
import {
    IsArray, IsBase64, IsBoolean, IsIn, IsInt, IsNumber,
    IsOptional, IsPositive, IsString, IsUUID, MinLength
} from "class-validator";
import { User } from "src/auth/entities/user.entity";

export class CreateFileDto {

    @IsString()
    @IsBase64()
    img: string;

}
