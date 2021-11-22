#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

source configuration.sh

./build.sh

docker network create ${NETWORK_NAME}

docker run \
    -it \
    --rm \
    --name "${CONTAINER_NAME}" \
    -p ${SERVER_PORT}:${SERVER_PORT} \
    --network ${NETWORK_NAME} \
    -e MYSQL_HOST=worldvious-mysql \
    -e MYSQL_PORT=3306 \
    -e MYSQL_DB=worldvious \
    -e MYSQL_USER=root \
    -e MYSQL_PASS= \
    -v ${MY_DIR}:/app \
    --entrypoint="node" \
    node:14-alpine "/app"