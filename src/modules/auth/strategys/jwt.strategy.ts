import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import DefaultUserDto from "../../user/dto/DefaultUserDto";
import {ConfigService} from "@nestjs/config";

@Injectable()
export default class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly authService: AuthService,
        private readonly configService: ConfigService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRETKEY
        });
    }

    async validate(payload: JwtPayload): Promise<DefaultUserDto> {
        const user = await this.authService.validateUser(payload)
        if (!user) throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED)
        return user
    }
}