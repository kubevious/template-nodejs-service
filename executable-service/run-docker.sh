#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

source configuration.sh

echo "*** PREPARE IMAGE WITH:"
echo "    $ ./prepare-docker.sh"

docker network create ${NETWORK_NAME}

docker run \
    -it \
    --rm \
    --name "${CONTAINER_NAME}" \
    -p ${SERVER_PORT}:${SERVER_PORT} \
    --network ${NETWORK_NAME} \
    ${IMAGE_NAME}
