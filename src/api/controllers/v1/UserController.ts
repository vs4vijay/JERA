import { JsonController, Get, Post, Body, Param, Put, Delete } from 'routing-controllers';
import { DeleteResult, UpdateResult } from 'typeorm';
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
    // TODO: Validations and DTO to Model conversion
    const user = new User();
    user.firstName = userDTO.firstName;
    user.lastName = userDTO.lastName;
    user.email = userDTO.email;
    // TODO: Send proper 201 status
    return this.userService.create(user);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body({ required: true }) userDTO: UserDTO): Promise<UpdateResult> {
    // TODO: Validations
    const user = new User();
    user.firstName = userDTO.firstName;
    user.lastName = userDTO.lastName;
    user.email = userDTO.email;
    return this.userService.update(id, user);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): Promise<DeleteResult> {
    return this.userService.delete(id);
  }
}
