import { PermissionEntity } from "src/entities/permission.entity";
import { FileDto } from "src/file/file.dto";

export interface UserDto {
    id: number;
    permission: PermissionEntity[];
    email: string;
    name: string;
    surname: string;
    date: Date;
    password: string;
    disabled: boolean;
    avatar?: FileDto;
}