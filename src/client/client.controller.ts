import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {

    constructor(
        private readonly clientService : ClientService
    ) { }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    find() {
        return this.clientService.find();
    }

    @Get(':id')
    @UseGuards(AuthGuard('jwt'))
    findOne(@Param('id') id : number) {
        return this.clientService.findOne(id);
    }
    
    @Post()
    @UseGuards(AuthGuard('jwt'))
    create(@Body() data : any) {
        return this.clientService.create(data);
    }
    
    @Put(':id')
    @UseGuards(AuthGuard('jwt'))
    update(@Param('id') id : number, @Body() data : any) {
        return this.clientService.update(id, data);
    }
    
    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    delete(@Param('id') id : number) {
        return this.clientService.delete(id);
    }

    @Get('page/:number')
    findByPage(@Param('number') no : number) {
        return this.clientService.findByPage(no);
    }

}
