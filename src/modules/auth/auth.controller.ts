import {Body, Controller, Get, Post, UseGuards} from "@nestjs/common";
import AuthService from "./auth.service";
import LocalGuard from "./guard/local.guard";
import JwtGuard from "./guard/jwt.guard";

@Controller('auth')
export default class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) {}

    @UseGuards(LocalGuard)
    @Post('login')
    async login(@Body() dto) {
        return this.authService.login(dto)
    }

    @Post('reg')
    async register(@Body() dto) {
        return this.authService.register(dto)
    }

    @UseGuards(JwtGuard)
    @Get('success')
    async getSuccess() {
        return {
            message: 'Ураааа!'
        }
    }
}