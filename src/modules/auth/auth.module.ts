import {Module} from "@nestjs/common";
import UserModule from "../user/user.module";
import CryptoModule from "../crypto/crypto.module";
import {JwtModule} from "@nestjs/jwt";
import {PassportModule} from "@nestjs/passport";

@Module({
    imports: [
        UserModule,
        CryptoModule,
        JwtModule.register({
            secret: process.env.SECRETKEY, signOptions: {
                expiresIn: process.env.EXPIRESIN,
            },
        }),
        PassportModule.register({
            defaultStrategy: 'jwt',
            property: 'user',
            session: false,
        }),
    ],
    providers: [],
    exports: []
})
export default class AuthModule {}