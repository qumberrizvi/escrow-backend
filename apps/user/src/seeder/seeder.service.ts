import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../entities/role.entity';
import { Roles } from '@qushah/common';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(Role) private roleRepository: Repository<Role>,
  ) {}

  async seed() {
    await this.seedRoles();
  }

  private async seedRoles() {
    const roles = Object.values(Roles);
    for (const roleName of roles) {
      const roleExists = await this.roleRepository.findOne({
        where: { name: roleName },
      });
      if (!roleExists) {
        await this.roleRepository.save(
          this.roleRepository.create({ name: roleName }),
        );
        console.log(`Inserted Role: ${roleName}`);
      }
    }
  }
}
