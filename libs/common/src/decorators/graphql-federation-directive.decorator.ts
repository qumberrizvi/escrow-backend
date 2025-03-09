import { Directive } from '@nestjs/graphql';
import { ENVIRONMENT } from '@qushah/common/constants';

// Detect if documentation generation is running
const isDocEnv = ENVIRONMENT.IS_DOC_ENV;

export function GraphQLFederationDirective(directive: string): ClassDecorator {
  return isDocEnv ? () => {} : Directive(directive);
}
