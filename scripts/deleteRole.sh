#/bin/bash
# https://github.com/claudiajs/claudia/issues/9#issuecomment-504738081
export AWS_PROFILE=sportseye
aws iam delete-role-policy --role-name my-function-executor --policy-name log-writer
aws iam delete-role --role-name my-function-executor
aws lambda delete-function --function-name my-function
