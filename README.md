# JERA

A Microservice in NodeJS, TypeScript, Express, and Oracle

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

- dotenv
- ESLint -
- Prettier - For Formatting (https://eslint.org/docs/user-guide/getting-started)
- Husky - https://github.com/typicode/husky

---

### Development Guidelines

- Make use of `index.ts` in folder which has multiple files

---

### Development Notes

```shell

    "oracledb": "^1.13.1",

    


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


```
