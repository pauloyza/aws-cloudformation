import * as lambda from "aws-cdk-lib/aws-lambda"
import * as lambdaNodeJS from "aws-cdk-lib/aws-lambda-nodejs"
import * as cdk from "aws-cdk-lib"
import {Construct} from "constructs"

export class ProductsAppStack extends cdk.Stack{

    readonly productsFetchHandler: lambdaNodeJS.NodejsFunction

    constructor(scope: Construct, id: string, props?: cdk.StackProps){
        super(scope, id, props)

        this.productsFetchHandler = new lambdaNodeJS.NodejsFunction(this, //scope
            "ProductsFetchFunction", {//name which the aws will work on the console
                //Proprieties of the lambda function
                functionName: "ProductsFetchFunction",
                entry: "lambda/products/productsFetchFunction.ts",
                handler: "handler", //name of the method which will be called
                memorySize: 128,
                timeout: cdk.Duration.seconds(5),
                bundling:{
                    minify: true, //the code will be shortist to increase performance
                    sourceMap: false //the sourcemap's resources will be desactivate to increase performance too
                }
                //ATTENTION WARNING: IF THE NODE.JS WAS 20.X, 2 PROPIERTIES WILL BE MANDATORY:
                // runtime: lambda.Runtime.NODEJS_20_X
                // memorySize: 512
            }    	
        )
    }
}
