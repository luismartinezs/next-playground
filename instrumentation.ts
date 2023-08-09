import { registerOTel } from '@vercel/otel'

// called whenever a new Next.js server instance is bootstrapped
// https://nextjs.org/docs/pages/building-your-application/optimizing/instrumentation
export function register() {
  registerOTel('next-app')
}