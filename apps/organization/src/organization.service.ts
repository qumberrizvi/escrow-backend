import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Organization } from './entities/organization.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere } from 'typeorm/find-options/FindOptionsWhere';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization)
    private readonly repository: Repository<Organization>,
  ) {}

  getHello(): string {
    return 'Hello from Organization Service!';
  }

  findAll(): Promise<Organization[]> {
    return this.repository.find({
      relations: ['meta'],
    });
  }

  findOne(where: FindOptionsWhere<Organization>) {
    return this.repository.findOne({ where });
  }
}
