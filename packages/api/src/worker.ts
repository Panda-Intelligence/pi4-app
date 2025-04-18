import { trpcServer } from '@hono/trpc-server'
import { createContext } from './context'
import { appRouter } from './router'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

type Bindings = {
  DATABASE_URL: string
  JWT_VERIFICATION_KEY: string
  APP_URL: string
}

const app = new Hono<{ Bindings: Bindings }>()

// Setup CORS for the frontend
app.use('/trpc/*', async (c, next) => {
  if (c.env.APP_URL === undefined) {
    console.log(
      'APP_URL is not set. CORS errors may occur. Make sure the .dev.vars file is present at /packages/api/.dev.vars'
    )
  }
  return await cors({
    origin: (origin) => (origin.endsWith(new URL(c.env.APP_URL).host) ? origin : c.env.APP_URL),
    credentials: true,
    allowMethods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    // https://hono.dev/middleware/builtin/cors#options
  })(c, next)
})

// Setup TRPC server with context
app.use(
  '/trpc/*',
  trpcServer({
    router: appRouter,
    createContext: async (opts, c) => {
      const ctx = await createContext(c.env.DATABASE_URL, c.env.JWT_VERIFICATION_KEY, opts)
      return ctx as unknown as Record<string, unknown>
    },
  })
)

export default app
