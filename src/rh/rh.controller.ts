import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RhDto } from './rh.dto';
import { RhService } from './rh.service';

@Controller('rh')
export class RhController {
  constructor(private readonly rhService: RhService) {}

  @Get()
  find(@Query() params) {
    return this.rhService.find(params);
  }

  @Get('data')
  data() {
    return this.rhService.disabledData();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.rhService.findOne(id);
  }

  @Get('page/:number')
  findByPage(@Param('number') no: number) {
    return this.rhService.findByPage(no);
  }

  @Post()
  create(@Body() data: Partial<RhDto>) {
    return this.rhService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: any) {
    return this.rhService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.rhService.delete(id);
  }
}
