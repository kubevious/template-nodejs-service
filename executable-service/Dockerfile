###############################################################################
# Step 1 : Builder image
FROM kubevious/node-builder:12
RUN node --version
RUN npm --version
RUN echo '//registry.npmjs.org/:_authToken=${NPM_TOKEN}' > ~/.npmrc
WORKDIR /app
COPY ./package*.json ./
ARG NPM_TOKEN
RUN npm ci
COPY ./src ./src
COPY ./tsconfig.json ./
RUN npm run build

###############################################################################
# Step 2 : Runner image
FROM node:12-alpine
WORKDIR /app
COPY --from=0 /app/package*.json ./
COPY --from=0 /app/node_modules ./node_modules
COPY --from=0 /app/dist ./dist
RUN ls -la
CMD [ "node", "." ]
