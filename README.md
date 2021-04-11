# Instructions

Add the following to your `~/.aws/credentials`:

```
[profile sportseye]
aws_access_key_id = [YOUR-ACCESS-KEY]
aws_secret_access_key = [YOUR-SECRET-KEY]
```

These credentials can be obtained from AWS (and indeed should be rotated occasionally).

Then set the `AWS_PROFILE` environment variable to `sportseye` before running the scripts: `export AWS_PROFILE=sportseye`

Now you're ready to deploy the authorisation Lambda functions, and populate the DynamoDB instance.

## Creating Lambda

This only needs to be performed if the Lambda does not already exist.

```bash
npm run claudia:create:{STAGE}
```

## Updating Lambda

This needs to be run if the Lambda function itself changes, or some other detail (such as the DynamoDB instance reference) — but *not* if the database has merely changed in content.

```bash
npm run claudia:update:{STAGE}
```

## Updating data

This will need to be performed when data needs to change. The script will step through the `data/group-data/index` `modules.exports` object keys to get all the authoritative names of groups. Therefore these names (object keys) must match the information in Auth0. For each group, it will create/update a record in a DynamoDB instance so that it can later be retrieved given the name of that group.

```bash
npm run dynamo:write:{STAGE}
```

The DynamoDB instance creation itself has not been automated (but it's merely a few clicks in the AWS UI).

## Architecture

[![Architecture](docs/architecture.png?raw=true "Architecture")](https://cloudcraft.co/view/5a231739-8f58-4d0c-a649-9e15f915499f?key=Iv0jV3C8dTlsthQxjxSmOw)
