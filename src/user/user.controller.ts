import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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
    @UseGuards(AuthGuard('jwt'))
    find() {
        return this.userService.find()
    }

    @Get('info/:id')
    @UseGuards(AuthGuard('jwt'))
    findOne(@Param('id') id : number) {
        return this.userService.findOne(id);
    }

    @Get('valida')
    @UseGuards(AuthGuard('jwt'))
    findUser(@Req() req){
        return this.userService.findOne(req.user.id).catch(() => {throw new HttpException('Usuário inválido', 401)})
    }

    @Post()
    // @UseGuards(AuthGuard('jwt'))
    create(@Body() data : UserDto) {
        return this.userService.create(data);
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'))
    update(@Param('id') id : number, @Body() data : UserDto) {
        return this.userService.update(id, data);
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    delete(@Param('id') id : number) {
        return this.userService.delete(id);
    }

    @Post("login")
    login(@Body() data) {
        return this.authService.login(data);
    }

}
