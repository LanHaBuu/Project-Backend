import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { UserController } from './user.controller';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';


@Module({
    imports: [TypeOrmModule.forFeature([UserEntity]),PassportModule],
    providers: [UserService,JwtStrategy],
    controllers: [UserController],
    exports: [UserService],
})
export class UserModule { }