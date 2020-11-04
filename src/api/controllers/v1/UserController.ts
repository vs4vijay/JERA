import { JsonController, Get, Post, Body, Param } from 'routing-controllers';
import { UserDTO } from '../../dtos';

import { User } from '../../models';
import { UserService } from '../../services';

@JsonController('/api/v1/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get('/:id')
  get(@Param('id') id: number): Promise<User> {
    return this.userService.getById(id);
  }

  @Post()
  create(@Body({ required: true }) userDTO: UserDTO): Promise<User> {
    // TODO: Validations
    const user = new User();
    user.firstName = userDTO.firstName;
    user.lastName = userDTO.lastName;
    user.email = userDTO.email;
    return this.userService.create(user);
  }
}
