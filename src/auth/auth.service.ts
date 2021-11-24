import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UsersEntity } from 'src/entities/user.entity';


@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(UsersEntity)
        private readonly usersRepository: Repository<UsersEntity>,
        private readonly jwtService: JwtService
    ) {

    }

    async login(data: any) {
        const email = data.email;
        const user = await this.usersRepository.findOne({ where: { email }, relations: ['avatar']});

        if (user && await this.comparePassword(data.password, user.password)) {
            const payload = {
                "id": user.id,
            };
            const token = this.jwtService.sign(payload);
            const { password, ...result } = user;

            return { result, token };
        }

        throw new HttpException({msg: "Usuário e/ou senha inválidos"}, HttpStatus.NOT_FOUND);
    }

    async checkPassword(data: any){
        const email = data.email;
        const user = await this.usersRepository.findOne({ where: { email }, relations: ['avatar']});
        if(await this.comparePassword(data.password, user.password)){
            return true
        }else{
            return false
        }
    }

    async comparePassword(attempt: string, pwd: string) {
        return await bcrypt.compare(attempt, pwd);
    }

}
