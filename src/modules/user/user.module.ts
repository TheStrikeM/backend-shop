import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./entities/user.entity";
import CryptoModule from "../crypto/crypto.module";
import UserRepository from "./repositories/user.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
        CryptoModule
    ],
    providers: [UserRepository],
    exports: [UserRepository],
})
export default class UserModule {}