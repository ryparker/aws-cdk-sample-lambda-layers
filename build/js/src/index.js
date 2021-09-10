"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aws_lambda_1 = require("@aws-cdk/aws-lambda");
var core_1 = require("@aws-cdk/core");
var aws_lambda_2 = require("@aws-cdk/aws-lambda");
var app = new core_1.App();
var stack = new core_1.Stack(app, "MyStack");
var layer = new aws_lambda_2.LayerVersion(stack, 'NpmDependencyLayer', {
    code: aws_lambda_2.Code.fromAsset('nodejs.zip'),
    compatibleRuntimes: [aws_lambda_1.Runtime.NODEJS_14_X],
    description: 'A layer that contains NPM dependencies.',
});
new aws_lambda_2.Function(stack, 'MyFunction', {
    code: aws_lambda_2.Code.fromAsset('src/lambdas'),
    runtime: aws_lambda_1.Runtime.NODEJS_14_X,
    handler: 'index.handler',
    layers: [layer],
});
