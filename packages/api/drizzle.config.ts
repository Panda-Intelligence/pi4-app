import type { Config } from 'drizzle-kit'
import { config } from 'dotenv'

config({ path: '.dev.vars' })

export default {
  out: './migrations',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  // verbose: false,
  // strict: true,
} satisfies Config
