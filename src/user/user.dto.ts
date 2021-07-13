export interface UserDto {
    id: number;
    permission: number;
    email: string;
    name: string;
    surname: string;
    date: Date;
    password: string;
    disabled: boolean;
}