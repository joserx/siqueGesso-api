import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    
    constructor(
        private readonly userService : UserService,
        private readonly authService : AuthService
    ) {}

    @Get()
    find() {
        return this.userService.find()
    }

    @Get(':id')
    findOne(@Param('id') id : number) {
        return this.userService.findOne(id);
    }

    @Post()
    create(@Body() data : UserDto) {
        return this.userService.create(data);
    }

    @Patch(':id')
    update(@Param('id') id : number, @Body() data : UserDto) {
        return this.userService.update(id, data);
    }

    @Delete(':id')
    delete(@Param('id') id : number) {
        return this.userService.delete(id);
    }

    @Post("login")
    login(@Body() data) {
        return this.authService.login(data);
    }

}
