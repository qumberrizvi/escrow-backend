import { Directive } from '@nestjs/graphql';
import { ENVIRONMENT } from '@qushah/common/constants';

// Detect if documentation generation is running
const isDocEnv = ENVIRONMENT.IS_DOC_ENV;

// This is used instead of using Directive decorator directly because CompoDoc fails to parse it.
export function GraphQLFederationDirective(directive: string): ClassDecorator {
  return isDocEnv ? () => {} : Directive(directive);
}
