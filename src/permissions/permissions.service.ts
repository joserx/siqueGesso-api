import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionEntity } from 'src/entities/permission.entity';
import { Repository } from 'typeorm';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

@Injectable()
export class PermissionsService {

  constructor(
    @InjectRepository(PermissionEntity)
    private permissionRepository: Repository<PermissionEntity>
  ){ }

  async create(data: any) {
    if(data){
      let permission = await this.permissionRepository.create(data)
      return this.permissionRepository.save(permission) 
    }else{
      throw new HttpException('No provided data', 500)
    }
  }

  async findAll() {
    return await this.permissionRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} permission`;
  }

  update(id: number, updatePermissionDto: UpdatePermissionDto) {
    return `This action updates a #${id} permission`;
  }

  async remove(id: number) {
    if(id && Number(id)){
      await this.permissionRepository.delete(id)
    }else{
      throw new HttpException('No provided id', 500)
    }
  }
}
