import { Role } from './role.entity';

export class User {
  id: string;
  role: Role;
  organizationId?: string;
}
