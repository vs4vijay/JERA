import { JsonController, Param, Get, Post, Body, Put, Delete } from 'routing-controllers';
import { DeleteResult, UpdateResult } from 'typeorm';
import { plainToClass, plainToClassFromExist } from 'class-transformer';

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
  get(@Param('id') id: string): Promise<User> {
    return this.userService.getById(id);
  }

  @Post()
  create(@Body({ required: true }) userDTO: UserDTO): Promise<User> {
    // TODO: Validations and DTO to Model conversion
    const user = userDTO.toModel();
    // TODO: Send proper 201 status
    return this.userService.create(user);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body({ required: true }) userDTO: UserDTO): Promise<UpdateResult> {
    // TODO: Validations and DTO to Model conversion
    const user = userDTO.toModel();
    return this.userService.update(id, user);
  }

  @Delete('/:id')
  delete(@Param('id') id: string): Promise<DeleteResult> {
    return this.userService.delete(id);
  }
}
