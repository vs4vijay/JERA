import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { User } from '../models';
import { UserRepository } from '../repositories';

@Service()
export class UserService {
  constructor(@OrmRepository() private userRepository: UserRepository) {}

  public async getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  public async save(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
}
