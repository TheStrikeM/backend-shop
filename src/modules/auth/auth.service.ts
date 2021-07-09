import {Injectable} from "@nestjs/common";
import UserRepository from "../user/repositories/user.repository";
import JwtStrategy from "./strategys/jwt.strategy";
import RegistrationUserDto from "../user/dto/RegistrationUserDto";
import RegistrationStatus, {LoginStatus, TokenStatus} from "./interfaces/statuses.interface";
import DefaultUserDto from "../user/dto/DefaultUserDto";
import {JwtPayload} from "./interfaces/jwtpayload.interface";
import {JwtService} from "@nestjs/jwt";
import LoginUserDto from "../user/dto/LoginUserDto";

@Injectable()
export default class AuthService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService
    ) {}

    private _createToken({ username }: DefaultUserDto): TokenStatus {
        const user: JwtPayload = { username }
        const accessToken = this.jwtService.sign(user)
        return {
            expiresIn: process.env.JWT_EXPIRESIN,
            accessToken,
        }
    }

    async register(dto: RegistrationUserDto): Promise<RegistrationStatus> {
        let status: RegistrationStatus = {
            success: true,
            message: 'User success registered'
        }

        try {
            await this.userRepository.create(dto)
        } catch (err) {
            status = {
                success: false,
                message: err
            }
        }
        return status
    }

    async login(dto: LoginUserDto): Promise<LoginStatus> {
        let status: LoginStatus = {
            success: true,
            message: 'The user has successfully logged in'
        }
        try {
            const user = await this.userRepository.findByLogin(dto);
            const token = this._createToken(user);
            status.info = {
                user,
                token
            }
        } catch (err) {
            status = {
                success: false,
                message: err
            }
        }

        return status
    }
}