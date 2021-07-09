import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./entities/user.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity])
    ],
    providers: [],
    exports: [],
})
export default class UserModule {}