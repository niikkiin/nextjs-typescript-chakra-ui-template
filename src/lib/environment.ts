import { cleanEnv, str } from 'envalid'

export const env = cleanEnv(
  {
    NODE_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.NODE_ENV,
  },
  {
    NODE_ENV: str({
      default: 'development',
      choices: ['development', 'test', 'staging', 'preview', 'production'],
    }),
  }
)
