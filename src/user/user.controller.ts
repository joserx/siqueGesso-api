import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    
    constructor(
        private readonly userService : UserService
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

    @Put(':id')
    update(@Param('id') id : number, @Body() data : UserDto) {
        return this.userService.update(id, data);
    }

    @Delete(':id')
    delete(@Param('id') id : number) {
        return this.userService.delete(id);
    }

    @Post('login')
    login(@Body() data) {

    }

}
