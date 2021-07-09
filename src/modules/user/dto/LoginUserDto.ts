import {IsNotEmpty} from "class-validator";

export default class LoginUserDto {
    @IsNotEmpty() username: string
    @IsNotEmpty() password: string
}