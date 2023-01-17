import { ContentType } from "src/enums/contentType.enum";
import { DtoBase } from "./dtoBase";
import { UserDto } from "./user.dto";

export class ContentDto extends DtoBase{
    title?: string;
    type?:ContentType;
    body?:string;
    imageUrls?: string;
    videoUrls?: string;
    users?:UserDto[]
}