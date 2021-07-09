import {Injectable} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {UserEntity} from "../entities/user.entity";
import {toUserDto} from "../dto/toUserDto";
import DefaultUserDto from "../dto/DefaultUserDto";

@Injectable()
export default class UserRepository {
    constructor(
        private readonly configService: ConfigService,
        @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
    ) {}

    async findOne(options?: object): Promise<DefaultUserDto> {
        const user: UserEntity = await this.userRepo.findOne(options);
        return toUserDto(user)
    }
}
