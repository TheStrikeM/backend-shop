import {IsEmail, IsNotEmpty} from "class-validator";

export class RegistrationUserDto {
    @IsNotEmpty() readonly username: string
    @IsNotEmpty() readonly password: string
    @IsNotEmpty() @IsEmail() readonly email: string
}