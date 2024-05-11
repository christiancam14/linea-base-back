import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),

    CommonModule,

    AuthModule,

    FilesModule,

    RoleModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
