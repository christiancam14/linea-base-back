import { PartialType } from '@nestjs/swagger';
import { CreateFileDto } from './create-file.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateFileDto {

    @IsString()
    id: string;

    @IsOptional()
    isActive: boolean;

}
