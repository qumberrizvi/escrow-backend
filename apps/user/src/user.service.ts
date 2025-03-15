import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dtos/create-user.input';
import { genSalt, hash, compare } from 'bcrypt';
import { FindOptionsWhere } from 'typeorm/find-options/FindOptionsWhere';
import { ValidateUserInput } from './dtos/validate-user.input';

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

  findOne(where: FindOptionsWhere<User>): Promise<User> {
    return this.repository.findOne({
      where,
    });
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

  async validate(input: ValidateUserInput): Promise<Partial<User>> {
    const { password, ...rest } = input;
    const user = await this.findOne(rest);
    if (!user) return null;
    const passwordMatches = await compare(password, user.password);
    if (!passwordMatches) return null;

    return {
      id: user.id,
      organizationId: user.organizationId,
      role: user.role,
    };
  }
}
