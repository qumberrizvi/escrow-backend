import { Inject, Injectable } from '@nestjs/common';
import { MicroServiceClient, PropertyCommand } from '@qushah/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class PropertyService {
  constructor(
    @Inject(MicroServiceClient.PROPERTY_CLIENT)
    private readonly propertyClient: ClientProxy,
  ) {}

  ping(): Observable<string> {
    return this.propertyClient.send({ cmd: PropertyCommand.PING_PROPERTY }, {});
  }
}
