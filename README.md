## Description
REST API project using NestJS framework.

## Requirement

- docker
- docker-composer

## Running the app

```bash
# development
$ docker-compose up -d

```

## Test

Get into the container:

```bash
$ docker exec -it oms-api bash

Then
```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
