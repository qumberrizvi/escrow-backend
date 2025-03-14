import { Field, InputType } from '@nestjs/graphql';
import { UserRole } from '@qushah/common';
import {
  IsEmail,
  IsEnum,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  IsUUID,
  ValidateIf,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  @Field(() => String)
  email: string;

  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  @Field(() => String)
  password: string;

  @IsString()
  @IsNotEmpty()
  @ValidateIf((o) => o.password !== o.passwordConfirmation) // Only validate if passwords don't match
  @IsIn([Math.random()], {
    message: 'Passwords do not match', // This condition will always throw error if @ValidateIf fails
  })
  @Field(() => String)
  passwordConfirmation: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  @Field(() => String)
  phone: string;

  @IsNotEmpty()
  @IsEnum(UserRole)
  @Field(() => UserRole)
  role: UserRole;

  @IsOptional()
  @IsUUID()
  @Field(() => String)
  organizationId: string;
}
