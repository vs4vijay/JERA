import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { User } from '../models';

export class UserDTO {
  @IsString()
  name: string;

  @IsBoolean()
  @IsOptional()
  isActive: boolean;

  toModel(): User {
    const user = new User();
    user.name = this.name;
    user.isActive = this.isActive;
    return user;
  }
}
