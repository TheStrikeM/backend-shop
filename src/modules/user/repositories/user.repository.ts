import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {UserEntity} from "../entities/user.entity";
import {toUserDto} from "../dto/toUserDto";
import DefaultUserDto from "../dto/DefaultUserDto";
import LoginUserDto from "../dto/LoginUserDto";
import CryptoService from "../../crypto/crypto.service";

@Injectable()
export default class UserRepository {
    constructor(
        private readonly configService: ConfigService,
        private readonly cryptoService: CryptoService,
        @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
    ) {}

    async findOne(options?: object): Promise<DefaultUserDto> {
        const user: UserEntity = await this.userRepo.findOne(options);
        return toUserDto(user)
    }

    async findByLogin({ username, password }: LoginUserDto): Promise<DefaultUserDto> {
        const user = await this.userRepo.findOne({ where: { username } })
        if (!user) throw new HttpException('User not found', HttpStatus.UNAUTHORIZED)

        const isValidPassword = await this.cryptoService.comparePassword(password, user.password)
        if (!isValidPassword) {
            throw new HttpException('Password is incorrect', HttpStatus.UNAUTHORIZED)
        }

        return toUserDto(user)
    }

    async findByPayload({ username }: any): Promise<DefaultUserDto> {
        return await this.findOne({where:  { username } });
    }
}
