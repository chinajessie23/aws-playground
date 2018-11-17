

### Install and setup serverless

### Install serverless
- `npm i -g serverless`

### Setup  IAM credential
- `serverless config credentials --provider aws --key xxxxxxxxxxxxxx --secret xxxxxxxxxxxxxx`
    
### Create a service
- `serverless create --template aws-nodejs --path lambda-sns-dlq-error-handling`

### Install dependencies
- `npm init -y && npm i serverless-pseudo-parameters`

### Deploy
- `serverless deploy`
- To deploy a function without touching the stack, e.g. `serverless deploy function --function error`

### Trigger API Gateway
- `curl -H "Content-Type: application/json" \
  -d '{"number":10000000}' \
  https://<id>.execute-api.<region>.amazonaws.com/dev/init`

### Integrated with Dashbird for watching logs
