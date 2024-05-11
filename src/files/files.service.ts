import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserFile } from './entities/file.entity';
import { Repository } from 'typeorm';
import { User } from 'src/auth/entities/user.entity';
import { v4 as uuid } from 'uuid';
import { NotFoundError } from 'rxjs';

@Injectable()
export class FilesService {

  private readonly logger = new Logger('filesService');

  constructor(

    @InjectRepository(UserFile)
    private readonly userFileRepository: Repository<UserFile>

  ) { }

  async uploadFile(createFileDto: CreateFileDto, user: User) {

    const newFile = {
      ...createFileDto,
      name: uuid(),
      isActive: true,
      user
    }

    try {

      const file = this.userFileRepository.create(newFile);
      const fileDB = await this.userFileRepository.save(file);

      return fileDB;

    } catch (error) {

      this.handleDBExceptions(error);

    }

  }

  async getFilesByUser(user: User) {
    return await this.userFileRepository.find({ where: { user } });
  }

  async inactiveFile(id: number) {

    const userFile = await this.userFileRepository.update({ id }, { isActive: false });

    if (!userFile.affected) {
      throw new NotFoundException(`Img with id: ${id} not found`)
    }

    return true;
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505')
      throw new InternalServerErrorException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException('Unexpected error, check server logs');
  }

}
