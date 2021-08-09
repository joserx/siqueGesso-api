import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {

    constructor(
        private readonly addressService : AddressService
    ) { }

    @Get()
    find() {
        return this.addressService.find();
    }

    @Get(':id')
    findOne(@Param('id') id : number) {
        return this.addressService.findOne(id);
    }
    
    @Post()
    create(@Body() data : any) {
        return this.addressService.create(data);
    }
    
    @Put(':id')
    update(@Param('id') id : number, @Body() data : any) {
        return this.addressService.update(id, data);
    }
    
    @Delete(':id')
    delete(@Param('id') id : number) {
        return this.addressService.delete(id);
    }


}
