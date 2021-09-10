import { Runtime } from '@aws-cdk/aws-lambda';
import { App, Stack, Stage } from "@aws-cdk/core";
import { Function, LayerVersion, Code } from '@aws-cdk/aws-lambda';

const app = new App();
const stack = new Stack(app, "MyStack");

const layer = new LayerVersion(stack, 'NpmDependencyLayer', {
  code: Code.fromAsset('nodejs.zip'),
  compatibleRuntimes: [Runtime.NODEJS_14_X],
  description: 'A layer that contains NPM dependencies.',
});

new Function(stack, 'MyFunction', {
  code: Code.fromAsset('src/lambdas'),
  runtime: Runtime.NODEJS_14_X,
  handler: 'index.handler',
  layers: [layer],
});
