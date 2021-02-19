#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

source configuration.sh

if [ -z "${NPM_TOKEN}" ]; then
    echo "ERROR: NPM_TOKEN not set"
    exit 1;
fi

docker build \
    -f Dockerfile \
    -t ${IMAGE_NAME} \
    --build-arg NPM_TOKEN \
    .

echo "*** RUN WITH:"
echo "    $ ./run-docker.sh"

