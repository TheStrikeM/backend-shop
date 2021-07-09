import {Module} from "@nestjs/common";
import UserModule from "../user/user.module";
import CryptoModule from "../crypto/crypto.module";
import {JwtModule} from "@nestjs/jwt";
import {PassportModule} from "@nestjs/passport";
import JwtStrategy from "./strategys/jwt.strategy";
import AuthController from "./auth.controller";
import JwtGuard from "./guard/jwt.guard";
import LocalGuard from "./guard/local.guard";
import AuthService from "./auth.service";

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
    providers: [JwtStrategy, AuthService, AuthController, JwtGuard, LocalGuard],
    exports: []
})
export default class AuthModule {}