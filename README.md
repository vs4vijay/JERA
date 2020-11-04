# JERA

A Microservice in NodeJS, TypeScript, Express, and Oracle

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
npm run dev
```

---

## Libraries Used

- typeorm
- dotenv
- ESLint -
- Prettier - For Formatting (https://eslint.org/docs/user-guide/getting-started)
- Husky - https://github.com/typicode/husky

---

## Development

- Create an entity: `npx typeorm entity:create -n User`
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

```shell

    "oracledb": "^1.13.1",

    
    Controller -> Service -> Repository -> Model -> DB


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
    

    class Config {
    NODE_ENV: string;
    DB: JSON;
    }


```
