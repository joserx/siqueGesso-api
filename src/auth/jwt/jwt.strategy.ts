import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from 'src/entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        @InjectRepository(UsersEntity)
        private readonly usersRepository: Repository<UsersEntity>,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: '123',
        });
    }

    async validate(payload: any) {
        try {
            const validUser = await this.refreshUserData(payload.id, payload);

            return {
                id: validUser.id,
                username: validUser.email,
            };
        } catch (error) {
            throw new HttpException({msg: 'Usuário não encontrado'}, HttpStatus.UNAUTHORIZED);
        }

    }

    async refreshUserData(userId: number, user: any) {
        const dbUser = await this.usersRepository.findOne(userId)
        if (!dbUser) {
            throw new HttpException({msg: 'Usuário não encontrado'}, HttpStatus.NOT_FOUND);
        }

        return dbUser;
    }

}
