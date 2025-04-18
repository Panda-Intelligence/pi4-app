import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

export const createDb = (databaseURL: string) => {
  // Redefining generic fixes a type error. Fix coming soon:
  // https://github.com/drizzle-team/drizzle-orm/issues/1945#event-12152755813
  const sql = neon<boolean, boolean>(databaseURL)
  return drizzle(sql)
}
