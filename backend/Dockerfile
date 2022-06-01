FROM denoland/deno:alpine-1.22.1

WORKDIR /usr/src/app/backend

COPY . .

CMD ["deno", "run", "--allow-net", "app.ts"]