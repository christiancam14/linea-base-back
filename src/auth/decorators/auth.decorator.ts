import { SetMetadata, UseGuards, applyDecorators } from '@nestjs/common';
import { validRoles } from 'src/auth/interfaces';
import { RoleProtected } from './role-protected.decorator';
import { AuthGuard } from '@nestjs/passport';
import { UserRoleGuard } from 'src/auth/guards/user-role.guards';

export function Auth(...roles: validRoles[]) {

    return applyDecorators(

        RoleProtected(...roles),
        UseGuards(AuthGuard(), UserRoleGuard),

    )

}
