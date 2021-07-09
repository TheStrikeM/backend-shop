import {Module} from "@nestjs/common";
import UserModule from "../user/user.module";
import CryptoModule from "../crypto/crypto.module";
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports: [
        UserModule,
        CryptoModule
    ],
    providers: [],
    exports: []
})
export default class AuthModule {}