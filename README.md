# before all: the command `cdk init --language typescript` was used

# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

# New libraries
(
    npm install aws-sdk @types/aws-lambda @types/uuid --save-dev
)

# basic commands on terminal
(
    cdk list
    cdk deploy --all
    cdk diff ### difference between the real project and the actual state of the aws's resources
    cdk destroy --all ### sugestive name
)


