import { Body, Controller, Get, HttpException, HttpStatus, Post,UseGuards } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(
        private userservice: UserService,
    ) { }

    @Post()
    async createUser(@Body() body: any) {
        const userRegister = await this.userservice.findUser(body.data.username)
        if (userRegister) {
            throw new HttpException('UserName đã tồn tại', HttpStatus.FORBIDDEN);
        }
        return await this.userservice.createUser(body.data)
    }

    

}