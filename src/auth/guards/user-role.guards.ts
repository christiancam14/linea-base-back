import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";


@Injectable()
export class UserRoleGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector
    ) { }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {

        const validRoles: string[] = this.reflector.get('META_ROLES', context.getHandler())

        if (!validRoles) return true;
        if (validRoles.length === 0) return true;

        console.log(context);

        return true;
    }
}