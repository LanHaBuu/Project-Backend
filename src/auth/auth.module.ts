import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';


@Module({
    imports: [UserModule, PassportModule, JwtModule.register({
        secret: 'z9emwekm2@dsadn',
    })],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy,JwtStrategy],
    exports: [AuthService]
})
export class AuthModule { }
