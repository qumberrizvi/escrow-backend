import { Query, Resolver } from '@nestjs/graphql';
import { PropertyService } from './property.service';

@Resolver()
export class PropertyResolver {
  constructor(private readonly propertyService: PropertyService) {}

  @Query(() => String)
  pingProperty() {
    return this.propertyService.ping();
  }
}
