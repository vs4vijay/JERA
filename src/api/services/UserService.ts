import { Service } from 'typedi';
import { DeleteResult, UpdateResult } from 'typeorm';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { User } from '../models';
import { UserRepository } from '../repositories';

@Service()
export class UserService {
  constructor(@OrmRepository() private userRepository: UserRepository) {}

  public async getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  public async getById(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  public async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  public async update(id: number, user: User): Promise<UpdateResult> {
    // TODO: Send updated entity
    return this.userRepository.update(id, user);
  }

  public async delete(id: number): Promise<DeleteResult> {
    return this.userRepository.delete({ id });
  }
}
