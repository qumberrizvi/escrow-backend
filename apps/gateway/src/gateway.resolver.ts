import { Query, Resolver } from '@nestjs/graphql';
import { GatewayService } from './gateway.service';
import { Observable } from 'rxjs';
import { Logger } from '@nestjs/common';

@Resolver()
export class GatewayResolver {
  private readonly logger = new Logger(GatewayResolver.name);

  constructor(private readonly gatewayService: GatewayService) {}

  @Query(() => String)
  pingGateway(): string {
    return this.gatewayService.ping();
  }

  @Query(() => String)
  pingAuth(): Promise<Observable<any>> {
    this.logger.debug('Resolver triggered');
    return this.gatewayService.pingAuth();
  }
}
