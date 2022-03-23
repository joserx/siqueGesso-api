import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

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
    create(@Body() CreateClientDto: CreateClientDto) {
        return this.clientService.create(CreateClientDto);
    }
    
    @Patch(':id')
    @UseGuards(AuthGuard('jwt'))
    update(@Param('id') id : string, @Body() UpdateClientDto : UpdateClientDto) {
        return this.clientService.update(+id, UpdateClientDto);
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
