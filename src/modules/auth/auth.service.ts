import {Injectable} from "@nestjs/common";
import UserRepository from "../user/repositories/user.repository";
import JwtStrategy from "./strategys/jwt.strategy";
import RegistrationUserDto from "../user/dto/RegistrationUserDto";
import RegistrationStatus from "./interfaces/registration-status.interface";

@Injectable()
export default class AuthService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly jwtStrategy: JwtStrategy
    ) {}

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
}