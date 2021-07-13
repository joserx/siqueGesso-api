import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UsersEntity)
        private readonly userRepository: Repository<UsersEntity>
    ) { }

    /**
     * GET ALL USERS IN THE DATABASE
     */
    async find() {
        return await this.userRepository.find();
    }

    /**
     * GET ONE USER BY ITS ID
     */
    async findOne(id: number) {
        if (id && Number(id)) {
            return await this.userRepository.findOne(id)
        } else {
            throw new HttpException('No id provided', 500);
        }
    }

    /**
     * CREATE A NEW USER
     */
    async create(data: Partial<UserDto>) {
        if (data.email && data.password) {
            if (data.permission && data.permission < 0) {
                throw new HttpException('The permission value must be more than zero.', 500);
            } else {
                let user = await this.userRepository.create(data)
                await this.userRepository.save(user)
                return await this.userRepository.findOne(user.id)
            }
        } else {
            throw new HttpException('There must be an email and a password for a new user record', 500);
        }
    }

    /**
     * UPDATE AN EXISTING USER
     */
    async update(id: number, data: Partial<UserDto>) {
        if (id && Number(id)) {
            if (data.permission && data.permission < 0) {
                throw new HttpException('The permission value must be more than zero.', 500);
            } else {
                await this.userRepository.update(id, data);
                return await this.userRepository.findOne(id);
            }
        } else {
            throw new HttpException('No id provided', 500);
        }
    }

    /**
     * DELETE AN USER BY ITS ID
     */
    async delete(id: number) {
        if (id && Number(id)) {
            return await this.userRepository.delete(id);;
        } else {
            throw new HttpException('No id provided', 500);
        }
    }

    /**
     * LOGIN USING THE JWT GUARD
     */
    async login() {

    }

}
