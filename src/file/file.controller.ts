import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { existsSync } from 'fs';
import { join } from 'path';
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
        let data : Partial<FileDto> = {};
        data.url = file.path;
        data.fileName = file.filename;
        return this.fileService.create(data)
    }

    @Get('download/:name')
    download(@Param('name') name: string, @Res() res) {
        const checkPath = join(__dirname, '../../uploads/' + name);
        try {
            const test = existsSync(checkPath);
            if (test) {
                return res.sendFile(name, { root: './uploads/', responseType: 'stream' });
            } else {
                throw new HttpException("File not found", HttpStatus.NOT_FOUND);
            }
        } catch (err) {
            throw new HttpException("Error", HttpStatus.BAD_REQUEST);
        }
    }

}
