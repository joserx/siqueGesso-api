import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { existsSync } from 'fs';
import { join, resolve } from 'path';
import { FileDto } from './file.dto';
import { FileService } from './file.service';
import { multerOptions } from './multer.options';

@Controller('file')
export class FileController {

    constructor(
        private readonly fileService: FileService
    ) { }

    @Get()
    find() {
        return this.fileService.find();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.fileService.findOne(id);
    }
    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.fileService.delete(id);
    }

    @Put(':id')
    @UseInterceptors(FileInterceptor('file', multerOptions))
    update(@UploadedFile() file, @Param('id') id: number, @Body() data: Partial<FileDto>) {
        data.url = file.path;
        data.fileName = file.filename;
        return this.fileService.update(id, data);
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', multerOptions))
    upload(@UploadedFile() file) {
        let data: Partial<FileDto> = {};
        data.url = file.path;
        data.fileName = file.filename;
        data.originalName = file.originalname
        return this.fileService.create(data)
    }

    @Get('download/:name')
    download(@Param('name') name: string, @Res() res) {
        const checkpath = join(__dirname, '../../../uploads/' + name)
        try {
            const teste = existsSync(checkpath);
            if (teste) {
              // console.log('encontrado')
      
              return res.sendFile(resolve(`./uploads/${name}`));
            }else{
              throw new HttpException("Arquivo não encontrado", HttpStatus.NOT_FOUND);
            }
          } catch(err) {
            console.error('error', err);
            throw new HttpException("Erro ao buscar arquivo", HttpStatus.BAD_REQUEST);
          }
    }

}
