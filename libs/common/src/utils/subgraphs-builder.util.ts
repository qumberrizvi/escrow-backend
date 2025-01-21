import { ServiceEndpointDefinition } from '@apollo/gateway/src/config';
import { ConfigHelper } from '@qushah/common';

export class SubgraphsBuilder {
  static async build(
    ...graphNames: string[]
  ): Promise<ServiceEndpointDefinition[]> {
    const configHelper = await ConfigHelper.getInstance();

    return graphNames.map((graphName) => {
      const keyPart = graphName?.split('_HOST')?.[0];
      const key = keyPart || graphName;
      const { host, port } = configHelper.getMicroServiceHosts(key);
      return {
        name: graphName,
        url: `${host}:${port}/graphql`,
      };
    });
  }
}
