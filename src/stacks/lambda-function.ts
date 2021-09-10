import { Stack, Construct } from "@aws-cdk/core";
import { Function, LayerVersion, Code, Runtime } from '@aws-cdk/aws-lambda';
import { StringParameter } from '@aws-cdk/aws-ssm';
import { NPM_DEPENDENCIES_LAYER_ARN_PARAM_NAME } from '../constants';

export default (scope: Construct) => {
  const stack = new Stack(scope, 'LambdaFunctionStack');

  const npmDependenciesLayerArn = StringParameter.valueForStringParameter(stack, NPM_DEPENDENCIES_LAYER_ARN_PARAM_NAME);
  const npmDependenciesLayer = LayerVersion.fromLayerVersionArn(stack, 'NpmDependenciesLayerImport', npmDependenciesLayerArn);

  new Function(stack, 'MyFunction', {
    code: Code.fromAsset('src/lambdas'),
    runtime: Runtime.NODEJS_14_X,
    handler: 'index.handler',
    layers: [npmDependenciesLayer],
  });

  return stack;
};
