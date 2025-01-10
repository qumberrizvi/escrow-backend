import { Query, Resolver } from '@nestjs/graphql';
import { GatewayService } from './gateway.service';

@Resolver()
export class GatewayResolver {
  constructor(private readonly gatewayService: GatewayService) {}

  @Query(() => String)
  getHello(): string {
    return this.gatewayService.getHello();
  }
}
