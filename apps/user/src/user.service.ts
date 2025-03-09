import { Inject, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { MicroServiceClient } from '@qushah/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @Inject(MicroServiceClient.ORGANIZATION_CLIENT)
    private readonly organizationClient: ClientProxy,
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  getHello(): string {
    return 'Hello from User Service!';
  }

  find(): Promise<User[]> {
    return this.repository.find();
  }
}
