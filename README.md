# CDK Deployment URL

An action to retrieve the deployment url from a CDK deployment.

## Usage

```yaml
on: pull_request
name: Display deployment url
jobs:
  deploy:
    name: Deploying the thing
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: NPM Install
        run: npm ci
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: eu-west-1
      - name: Deploy stack to AWS
        id: cdk_deploy
        run: cdk deploy --outputs-file cdk.out.json foo-dev --require-approval never
      - name: Get deployment url
        uses: metrisk/cdk-deployed-url
        id: get_deployment_url
      - name: Echo url
        run: |
          echo ${{ steps.get_deployment_url.outputs.cdk_deployment_url }}
```
