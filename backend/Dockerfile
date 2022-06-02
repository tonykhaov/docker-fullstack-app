FROM node:lts-bullseye

WORKDIR /usr/src/app/backend

COPY package.json /usr/src/app/backend
COPY pnpm-lock.yaml /usr/src/app/backend

RUN npm install -g pnpm

RUN pnpm install

COPY . /usr/src/app/backend

RUN pnpm run build
CMD ["pnpm", "start"]