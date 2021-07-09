import {Injectable} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";

@Injectable()
export default class UserRepository {
    constructor(
        private readonly configService: ConfigService,
    ) {}
}
