import type { IconName } from 'tech-stack-icons'

/** Mapeia cada tag de tecnologia usada no projeto para o ícone correspondente. */
export const STACK_ICON_NAMES: Partial<Record<string, IconName>> = {
  React: 'react',
  'React Native': 'reactnative',
  'Node.js': 'nodejs',
  TypeScript: 'typescript',
  JavaScript: 'js',
  PostgreSQL: 'postgresql',
  'Next.js': 'nextjs',
  Prisma: 'prisma',
  Docker: 'docker',
  Redis: 'redis',
  Expo: 'expo',
  Firebase: 'firebase',
  Vite: 'vitejs',
  Tailwind: 'tailwindcss',
  Stripe: 'stripe',
  MongoDB: 'mongodb',
  Express: 'expressjs',
  HTML: 'html5',
  CSS: 'css3',
  SQLite: 'sqlite',
  Git: 'git',
}
