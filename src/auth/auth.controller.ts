import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Headers, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { GetUser, Auth, RawHeaders, RoleProtected } from './decorators';
import { User } from './entities/user.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { IncomingHttpHeaders } from 'http';
import { validRoles } from './interfaces';
import { UserRoleGuard } from './guards/user-role.guards';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) { }

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('check-status')
  @Auth()
  checkAuthStatus(
    @GetUser() user: User
  ) {
    return this.authService.checkAuthStatus(user);
  }

  @Get('private')
  @SetMetadata('roles', ['user', 'admin', 'super-user'])
  @UseGuards(AuthGuard())
  testingPrivateRoute(
    @Req() request: Express.Request,
    @GetUser() user: User,
    @GetUser('email') userEmail: string,
    @RawHeaders() RawHeaders: string[],
    @Headers() headers: IncomingHttpHeaders,
  ) {

    return {
      ok: true,
      message: 'Hola Mundo Private',
      user,
      userEmail,
      RawHeaders,
      headers
    };

  }

  @Get('private2')
  @RoleProtected(validRoles.superUser, validRoles.admin)
  @UseGuards(AuthGuard(), UserRoleGuard)
  privateRoute2(
    @GetUser() user: User
  ) {

    return {
      ok: true,
      user
    }
  }

  @Get('private3')
  @Auth(validRoles.admin, validRoles.superUser)
  privateRoute3(
    @GetUser() user: User
  ) {
    return {
      ok: true,
      user
    }
  }

}
