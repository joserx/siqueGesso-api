import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {

    constructor(
        private readonly clientService : ClientService
    ) { }

    @Get()
    find() {
        return this.clientService.find();
    }

    @Get(':id')
    findOne(@Param('id') id : number) {
        return this.clientService.findOne(id);
    }
    
    @Post()
    create(@Body() data : any) {
        return this.clientService.create(data);
    }
    
    @Put(':id')
    update(@Param('id') id : number, @Body() data : any) {
        return this.clientService.update(id, data);
    }
    
    @Delete(':id')
    delete(@Param('id') id : number) {
        return this.clientService.delete(id);
    }

}
