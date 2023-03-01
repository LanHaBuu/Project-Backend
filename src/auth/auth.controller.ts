import { Body, Controller, Get, HttpException, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';


@Controller('auth')
export class AuthController {
    constructor(
        private authservice: AuthService
    ) { }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    login(@Request() req) {
        return this.authservice.createToken(req.user)
    }
}