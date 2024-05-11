import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserFile } from './entities/file.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [FilesController],
  providers: [FilesService],
  imports: [
    TypeOrmModule.forFeature([UserFile]),
    AuthModule
  ],
  exports: [
    FilesService,
    TypeOrmModule
  ]
})
export class FilesModule {}
