# AWS CDK Sample Lambda Layers Project

This project creates two stacks. One stack creates a `LambdaLayerVersion` that hold the NPM dependency [`chalk`](https://github.com/chalk/chalk). The other stack creates a new `LambdaFunction` that uses the layer's `chalk` dependency to print "Hello World!".

Notice: There are [known CloudFormation limitations when using Lambda layers across multiple stacks](https://github.com/aws/aws-cdk/issues/1972). To workaround this problem, we create the Lambda layer stack first and store the created Lambda Layer's ARN in SSM parameter store. We then deploy the Lambda function stack which imports that Layer ARN from SSM parameter store. This allows users to update the configuration of the Lambda Layer without running into the dependency error:

```sh
Error: someResource cannot be updated as it is in use by otherResource
```

For other workarounds checkout this [issue thread](https://github.com/aws/aws-cdk/issues/1972).

## :rocket: Quick Start

**1. Install dependencies with Yarn v1**

```shell
  yarn install
```

**2. Create the [bootstrap stack](https://docs.aws.amazon.com/cdk/latest/guide/bootstrapping.html) in your AWS account**
_This only needs to be ran once per account/region._

```shell
  yarn bootstrap
```

**3. Build Cloudformation files**

```shell
  yarn build
```

**4. Deploy the Lambda Layer stack**

```shell
  yarn deploy LambdaLayerStack
```

**5. Deploy the Lambda Function stack**

```shell
  yarn deploy LambdaFunctionStack
```
