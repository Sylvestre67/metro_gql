FROM node:10

WORKDIR /usr/src/app

RUN yarn global add typescript ts-node  graphql-cli prisma nodemon

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN chmod -R +x ./docker-scripts/

EXPOSE 4000

ENTRYPOINT [ "./docker-scripts/entrypoint.sh" ]
