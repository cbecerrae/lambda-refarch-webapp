// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "s6k6adr4cep4ipcheaieitjef",     // CognitoClientID
  "api_base_url": "https://z3cne5dmn1.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-cbecerra-lambda-refarch-webapp.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1o1u0k9gc5y19.amplifyapp.com"                                      // AmplifyURL
};

export default config;
