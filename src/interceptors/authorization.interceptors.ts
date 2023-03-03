import {CallHandler,ExecutionContext,HttpException,HttpStatus,NestInterceptor} from '@nestjs/common'
import {Injectable} from '@nestjs/common'

import {tap} from 'rxjs/operators'

@Injectable()
class AuthorizationIC implements NestInterceptor {
    constructor(){}
    intercept(context: ExecutionContext, next: CallHandler<any>){
        const {user} = context.switchToHttp().getRequest()
       
        if(!user.isAdmin) {
            throw new HttpException('Éo có quyền', HttpStatus.FORBIDDEN);
            
        }
        return next.handle().pipe(tap((res) => {
            
        })
        )
    }
}
export {AuthorizationIC}
