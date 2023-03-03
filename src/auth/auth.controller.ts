import { Body, Controller, Get, HttpException, HttpStatus, Post, Request, UseGuards,Req,UseInterceptors } from '@nestjs/common';
import { AuthorizationIC } from 'src/interceptors/authorization.interceptors';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import {  JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth-guard';


@Controller('auth')
export class AuthController {
    constructor(
        private authservice: AuthService,
        private userservice:UserService
    ) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req) {
        return this.authservice.createToken(req.user)
    }

    @UseGuards(JwtAuthGuard)
    @UseInterceptors(AuthorizationIC)
    @Get('getAllUser')
    async getAll(@Req() req) {  
        return await this.userservice.findAllUser()
    }
}