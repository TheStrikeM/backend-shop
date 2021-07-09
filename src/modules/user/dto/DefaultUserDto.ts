import {IsNotEmpty} from "class-validator";

export default class DefaultUserDto {
    @IsNotEmpty() id: string
    @IsNotEmpty() username: string
    @IsNotEmpty() email: string
}