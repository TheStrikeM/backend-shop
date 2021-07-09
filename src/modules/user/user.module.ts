import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./entities/user.entity";
import CryptoModule from "../crypto/crypto.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
        CryptoModule
    ],
    providers: [],
    exports: [],
})
export default class UserModule {}