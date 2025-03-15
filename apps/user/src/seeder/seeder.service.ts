import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../entities/role.entity';
import { UserPermission, UserRole } from '@qushah/common';
import { Permission } from '../entities/permission.entity';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(Role) private roleRepository: Repository<Role>,
    @InjectRepository(Permission)
    private permissionRepository: Repository<Permission>,
  ) {}

  async seed() {
    await this.seedRoles();
    await this.seedPermissions();
  }

  private async seedRoles() {
    const roles = Object.values(UserRole);
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

  private async seedPermissions() {
    const permissions = Object.values(UserPermission);
    for (const permissionName of permissions) {
      const permissionExists = await this.permissionRepository.findOne({
        where: { name: permissionName },
      });

      if (!permissionExists) {
        await this.permissionRepository.save(
          this.permissionRepository.create({ name: permissionName }),
        );
        console.log(`Inserted Permission: ${permissionName}`);
      }
    }
  }
}
