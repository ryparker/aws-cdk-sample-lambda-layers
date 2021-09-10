import { App } from "@aws-cdk/core";
import createLambdaLayerStack from './stacks/lambda-layer';
import createLambdaFunctionStack from './stacks/lambda-function';


const app = new App();

createLambdaLayerStack(app);
createLambdaFunctionStack(app);
