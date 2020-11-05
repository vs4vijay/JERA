FROM node:14.15.0-alpine
LABEL maintainer="vs4vijay@gmail.com"

# Update image
RUN apk update

# Add work directory
WORKDIR /app

# Use "node" user
RUN chown -Rh node:node /app
USER node

# Install npm modules
COPY package*.json ./
RUN npm ci

# Copy source code
COPY tsconfig.json ./
COPY ormconfig.json ./
COPY src /app/src

# Build
RUN npm run build

EXPOSE 5000

CMD [ "node", "./dist/app.js" ]