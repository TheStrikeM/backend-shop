import {IsEmail, IsNotEmpty} from "class-validator";
import LoginUserDto from "./LoginUserDto";

export default class RegistrationUserDto extends LoginUserDto {
    @IsNotEmpty() @IsEmail() readonly email: string
}