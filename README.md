# JERA

A Microservice in NodeJS, TypeScript, Express, and Oracle

Express + Routing-Controllers + TypeScript + TypeORM + TypeDI

---

## Installation

```shell
npm install
```

- Create `.env` file from `.env.example` and populate environment variables

---

## Running

```shell
# Build and Run
npm start

# Run on local machine with watcher
npm run start:dev
```

---

## Features

- [x] TypeScript
- [x] Depedency Injection of Services, Repositories, Controllers
- [x] Modular App.ts
- [x] Properly structured codebase models, repositories, services, controllers, migrations etc.
- [x] ORM Migrations used for maintaining database schemas
- [x] Follows pure REST APIs
- [x] Input validations
- [x] Use of `.env` file
- [x] Git pre-commit hooks setup
- [x] Linting and Standard Formatting
- [x] Added system metadata like createdAt, updatedAt
- [x] Use of DTOs
- [x] Added audit log like createdBy, updatedBy
- [x] isActive
- [x] uuid as primary key
- [x] Soft Delete Options
- [x] Pagination
- [ ] Structured Logging
- [ ] Unit Testing
- [ ] Authentication
- [ ] Authorization
- [ ] Error Handling and Generic Error Middleware
- [ ] Search Framework
- [ ] AbstractService or interface Service
- [ ] Graceful Shutdown
- [x] Containerized with Docker

---

## Libraries Used

- NodeJS with TypeScript
  - ts-node and ts-node-dev for running on local machine
- Express Framework
- TypeORM - ORM Tool to interact with Database
- TypeDI - Dependency Injection library (https://github.com/typestack/typedi)
- routing-controllers - For Defining Routes in elegent way (https://github.com/typestack/routing-controllers)
- class-validator - For input validations (https://github.com/typestack/class-validator)
- class-transformer - For transforming objects (https://github.com/typestack/class-transformer)
- dotenv - Use Environment Variables from .env file
- ESLint - For Linting the ES and TypeScript codebase
  - `ext install dbaeumer.vscode-eslint`
- Prettier - For Formatting Standard (https://eslint.org/docs/user-guide/getting-started)
  - `ext install esbenp.prettier-vscode`
- Husky - https://github.com/typicode/husky
- lint-staged - https://github.com/okonet/lint-staged

---

## Development

- Create an entity: `npm run typeorm -- entity:create -n User`
- Generate migration: `npm run typeorm -- migration:generate -n CreateUser`
- Run the migrations: `npm run typeorm -- migration:run`

Notes:

- Migration name pattern: Add<field>To<Entity>
  - AddLastNameToUser
  - UpdateEmailToEmployee

---

### Development Guidelines

- Make use of `index.ts` in folder which has multiple files

---

### Development Notes

```javascript

curl -s localhost:9000/api/v1/users | jq

curl -s -H 'Content-Type:application/json' localhost:9000/api/v1/users -d '{"name": "1111"}' | jq

curl -s -H 'Content-Type:application/json' -X PUT localhost:9000/api/v1/users/a14040c8-4016-401b-98db-37619ae5a6fc -d '{"name": "222 - updated"}' | jq

curl -s localhost:9000/api/v1/users/7f5e8690-6be0-42ba-91a3-126e49723bc1 -X DELETE

  private initMiddlewares(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }


"oracledb": "^1.13.1",

config: any to some type?


Controller -> Service -> Repository -> Model -> DB


TypeORM:
- `save` method does both creation and updation

@OneToMany(type => SubCategory, subcategoy => subcategoy.Category)
SubCategories: SubCategory[];

@ManyToOne(type => Category, category => category.SubCategories)
@JoinColumn({name: "CategoryId"})
Category: Category;



npm install --save-dev husky
{
    "husky": {
        "hooks": {
        "pre-commit": "yarn lint"
        }
    }
}

https://github.com/okonet/lint-staged
https://github.com/azz/pretty-quick

https://sourcelevel.io/blog/how-to-setup-eslint-and-prettier-on-node

https://github.com/albinojunior/node-crudapi-ts/blob/master/src/app.ts

mkdir -p /opt/oracle
cd /opt/oracle
wget https://download.oracle.com/otn_software/linux/instantclient/instantclient-basic-linuxx64.zip
unzip instantclient-basic-linuxx64.zip

apt-get install -y libaio1

sudo sh -c "echo /opt/oracle/instantclient_19_9 > /etc/ld.so.conf.d/oracle-instantclient.conf"
sudo ldconfig

export LD_LIBRARY_PATH=/opt/oracle/instantclient_19_9


node --require ts-node/register ./node_modules/typeorm/cli.js

BaseController / AbstractController

class Config {
  NODE_ENV: string;
  DB: JSON;
}

import { Request, Response } from "express";
getAll(@Req() request: Request, @Res() response: Response) {


import { useExpressServer } from "routing-controllers";
let express = require("express");
let app = express();
app.use();
useExpressServer(app, {
  defaults: {
    nullResultCode: 404
  },
  cors: true,
  controllers: [__dirname + "/controllers/*.js"],
  middlewares: [LoggingMiddleware, CustomErrorHandler],
});
app.listen(3000);

//
class Pagination {
    @IsPositive()
    limit: number;

    @IsPositive()
    offset: number;
}
@QueryParam("limit") limit: number
getUsers(@QueryParams() pagination: Pagination)
@HeaderParam("authorization") token: string
@ContentType("text/csv")
@Location("http://github.com")
@Redirect("http://github.com")
@Render("index.html")
@HttpCode(201)
@OnUndefined(404)
getOne(@Param("id") id: number) {
    return userRepository.findOneById(id);
}

import { HttpError } from "routing-controllers";
export class UserNotFoundError extends HttpError {
    constructor() {
        super(404, "User not found!");
    }
}
@OnUndefined(UserNotFoundError)

throw new UserNotFoundError()

@UseBefore()/@UseAfter()

@Middleware({ type: "before" }) // Global middleware
export class MyMiddleware implements ExpressMiddlewareInterface {
  use(request: any, response: any, next?: (err?: any) => any): any {
    console.log("do something...");
    next();
  }
}

import { Middleware, ExpressErrorMiddlewareInterface } from "routing-controllers";
@Middleware({ type: "after" })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
  error(error: any, request: any, response: any, next: (err: any) => any) {
    console.log("do something...");
    next();
  }
}

@Authorized()
authorizationChecker: async (action: Action, roles: string[]) => {...}

@CurrentUser()
currentUserChecker: async (action: Action) => {...}

import { createParamDecorator } from "routing-controllers";


process.on('SIGINT', () => {
  // Gracefully
}



migrationsRun: true


const limit = request.params.pageSize;

const skip = request.params.pageNo * limit;

const [userListByPage, totalUsersCount] = await this.userRepository.createQueryBuilder(“user”).skip(skip).take(limit).getManyAndCount();


.where(`user.address ::jsonb @> \'{"state":"${query.location}"}\'`)

jest --init


Authentication using OIDC
- Okta
  - package - @okta/oidc-middleware
    - Routes - oidc.router
    - Middleware - oidc.ensureAuthenticated()
    - Logout - oidc.forceLogoutAndRevoke()
  - Login - https://developer.okta.com/login/
  - Issuer URL - https://dev-04022784.okta.com
  - Client ID - 0oa5xan98da2ngFCf5d6
  - Client Secret -
- Auth0
  - package - express-openid-connect
    - Routes - auth(authConfig)
    - Middleware - requiresAuth()
  - Login - https://auth0.auth0.com
  - Issuer URL - https://vs4vijay.auth0.com
  - Client ID - g2m6mwjswZap6TNKlrCb6isGUvw6D9Sh
  - Client Secret -
- Playground - https://openidconnect.net/
- Libraries
  - https://github.com/panva/node-openid-client
  - https://github.com/jaredhanson/passport
- Providers
  - https://github.com/panva/node-oidc-provider
  - ORY Hydra - https://github.com/ory/hydra
  - Keycloak - https://github.com/keycloak/keycloak
  - https://github.com/dexidp/dex
  - https://github.com/apereo/cas
  - Azure AD
  - Ping Identity
  - OneLogin
  - LoginRadius
  - OpenAM ForgeRock

```
