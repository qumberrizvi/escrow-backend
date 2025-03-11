import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dtos/create-user.input';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  getHello(): string {
    return 'Hello from User Service!';
  }

  find(): Promise<User[]> {
    return this.repository.find();
  }

  async create(input: CreateUserInput): Promise<User> {
    const saltOrRounds = await genSalt();
    const password = await hash(input.password, saltOrRounds);

    return this.repository.save({
      ...input,
      password,
      role: {
        name: input.role,
      },
    });
  }
}
