import {Injectable} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {UserEntity} from "../entities/user.entity";

@Injectable()
export default class UserRepository {
    constructor(
        private readonly configService: ConfigService,
        @InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>,
    ) {}

    findById(options?: object): Promise<UserEntity> {
        return this.usersRepository.findOne(id)
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id)
    }


}
