import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmbarqueService } from './embarque.service';
import { CreateEmbarqueDto } from './dto/create-embarque.dto';
import { UpdateEmbarqueDto } from './dto/update-embarque.dto';

@Controller('embarque')
export class EmbarqueController {
  constructor(private readonly embarqueService: EmbarqueService) {}

  @Post()
  create(@Body() createEmbarqueDto: CreateEmbarqueDto) {
    return this.embarqueService.create(createEmbarqueDto);
  }

  @Get()
  findAll() {
    return this.embarqueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.embarqueService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmbarqueDto: UpdateEmbarqueDto) {
    return this.embarqueService.update(+id, updateEmbarqueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.embarqueService.remove(+id);
  }
}
