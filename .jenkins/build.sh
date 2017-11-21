#!/bin/bash

LOCAL_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
HEAD_COMMIT="$(git rev-parse HEAD)"

BRANCH_NAME="${1:-${LOCAL_BRANCH}}"
BUILD_ID="${2:-${HEAD_COMMIT}}"

cd node
docker build -t wedeploy/wedeploy.com:${BRANCH_NAME}-${BUILD_ID} .