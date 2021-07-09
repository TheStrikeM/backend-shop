import {UserEntity} from "../entities/user.entity";
import DefaultUserDto from "./DefaultUserDto";

export function toUserDto(data: UserEntity): DefaultUserDto {
    const { id, username, email } = data
    let userDto: DefaultUserDto = { id, username, email, }
    return userDto
}