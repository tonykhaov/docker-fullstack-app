FROM node:lts-bullseye

WORKDIR /usr/src/app/frontend

COPY package.json /usr/src/app/frontend
COPY pnpm-lock.yaml /usr/src/app/frontend

RUN npm install -g pnpm

RUN pnpm install

COPY . /usr/src/app/frontend

CMD ["pnpm", "dev", "--host"]