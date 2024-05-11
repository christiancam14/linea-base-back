import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { User } from 'src/auth/entities/user.entity';
import { Auth, GetUser } from 'src/auth/decorators';
import { validRoles } from 'src/auth/interfaces';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) { }

  @Post()
  @Auth(validRoles.admin, validRoles.superUser, validRoles.user)
  uploadImage(
    @Body() createFileDto: CreateFileDto,
    @GetUser() user: User,
  ) {
    return this.filesService.uploadFile(createFileDto, user);
  }

  @Get()
  @Auth(validRoles.admin, validRoles.superUser, validRoles.user)
  getUserImage(
    @GetUser() user: User,
  ) {
    return user.file;
  }

  @Delete()
  @Auth(validRoles.admin, validRoles.superUser, validRoles.user)
  deleteImage(@Body('id') id: number) {
    return this.filesService.inactiveFile(+id);
  }


}

