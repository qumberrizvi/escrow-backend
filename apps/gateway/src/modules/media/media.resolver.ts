import { Query, Resolver } from '@nestjs/graphql';
import { MediaService } from './media.service';
import { Observable } from 'rxjs';

@Resolver()
export class MediaResolver {
  constructor(private readonly mediaService: MediaService) {}

  @Query(() => String)
  pingMedia(): Observable<string> {
    return this.mediaService.ping();
  }
}
