FROM node:18.16.0-alpine as server


# https://docs.railway.app/deploy/dockerfiles#environment-variables
# This is not very pretty but it's used to pass build time variables to runtime
ARG DEBUG_MODE
ENV DEBUG_MODE=$DEBUG_MODE
ARG ACCESS_TOKEN_SECRET
ENV ACCESS_TOKEN_SECRET=$ACCESS_TOKEN_SECRET
ARG ACCESS_TOKEN_EXPIRES_IN
ENV ACCESS_TOKEN_EXPIRES_IN=$ACCESS_TOKEN_EXPIRES_IN
ARG LOGIN_TOKEN_SECRET
ENV LOGIN_TOKEN_SECRET=$LOGIN_TOKEN_SECRET
ARG LOGIN_TOKEN_EXPIRES_IN
ENV LOGIN_TOKEN_EXPIRES_IN=$LOGIN_TOKEN_SECRET
ARG REFRESH_TOKEN_SECRET
ENV REFRESH_TOKEN_SECRET=$REFRESH_TOKEN_SECRET
ARG REFRESH_TOKEN_EXPIRES_IN
ENV REFRESH_TOKEN_EXPIRES_IN=$REFRESH_TOKEN_EXPIRES_IN
ARG PG_DATABASE_URL
ENV PG_DATABASE_URL=$PG_DATABASE_URL
ARG FRONT_AUTH_CALLBACK_URL
ENV FRONT_AUTH_CALLBACK_URL=$FRONT_AUTH_CALLBACK_URL
ARG STORAGE_TYPE
ENV STORAGE_TYPE=$STORAGE_TYPE
ARG STORAGE_LOCAL_PATH
ENV STORAGE_LOCAL_PATH=$STORAGE_LOCAL_PATH

WORKDIR /app/server
COPY ./server/package.json ./
COPY ./server/yarn.lock ./
RUN yarn install

COPY ./server .
RUN npx prisma generate

RUN yarn build

CMD ["node", "dist/src/main"]
