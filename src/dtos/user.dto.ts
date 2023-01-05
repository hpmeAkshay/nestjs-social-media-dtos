import { DtoBase } from "./dtoBase";

export class UserDto extends DtoBase{
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string
    password?: string;
}


// ? : means optional field, even if we dont provide it its fine