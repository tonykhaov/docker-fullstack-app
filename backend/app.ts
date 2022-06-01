import { Application } from 'https://deno.land/x/oak@v10.5.1/mod.ts'

const app = new Application()

app.use((ctx) => {
  ctx.response.headers.set('Content-Type', 'application/json') // set to html if you want
  ctx.response.body = {
    message: 'Hello World',
  }
})

await app.listen({ port: 8000 })
