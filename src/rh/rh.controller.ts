import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RhDto } from './rh.dto';
import { RhService } from './rh.service';

@Controller('rh')
export class RhController {

    constructor(
        private readonly rhService : RhService
    ) {}

    @Get()
    find() {
        return this.rhService.find()
    }

    @Get(':id')
    findOne(@Param('id') id : number) {
        return this.rhService.findOne(id);
    }

    @Post()
    create(@Body() data : Partial<RhDto>) {
        return this.rhService.create(data);
    }

    @Put(':id')
    update(@Param('id') id : number, data : Partial<RhDto>) {
        return this.rhService.update(id, data);
    }

    @Delete(':id')
    delete(@Param('id') id : number) {
        return this.rhService.delete(id);
    }



}
