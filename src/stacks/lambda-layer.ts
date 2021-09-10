import { Runtime } from '@aws-cdk/aws-lambda';
import { Construct, Stack } from "@aws-cdk/core";
import { LayerVersion, Code } from '@aws-cdk/aws-lambda';
import { StringParameter } from '@aws-cdk/aws-ssm';
import { NPM_DEPENDENCIES_LAYER_ARN_PARAM_NAME } from '../constants';

export default (scope: Construct) => {
  const stack = new Stack(scope, 'LambdaLayerStack');

  const layer = new LayerVersion(stack, 'NpmDependenciesLayer', {
    code: Code.fromAsset('nodejs.zip'),
    compatibleRuntimes: [Runtime.NODEJS_14_X],
    description: 'A layer that contains NPM dependencies.',
  });

  new StringParameter(stack, 'NpmDependenciesLayerParam', {
    parameterName: NPM_DEPENDENCIES_LAYER_ARN_PARAM_NAME,
    stringValue: layer.layerVersionArn,
  })

  return stack;
}
