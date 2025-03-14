import { registerEnumType } from '@nestjs/graphql';

export enum UserPermission {
  CREATE_USER = 'CREATE_USER',
  UPDATE_USER = 'UPDATE_USER',
  DELETE_USER = 'DELETE_USER',
}

registerEnumType(UserPermission, { name: 'UserPermission' });
