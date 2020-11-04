import { JsonController, Get } from 'routing-controllers';

import { User } from '../../models';
import { UserService } from '../../services';

@JsonController('/api/v1/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.userService.getAll();
  }
}
