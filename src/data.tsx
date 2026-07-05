import { Music, Dices, Footprints } from 'lucide-react'
import type { ReactNode } from 'react'

export interface Project {
  name: string
  shot: string
  tags: string[]
  desc: string
  long: string
}

export interface Experience {
  period: string
  role: string
  org: string
  desc: string
}

export interface Hobby {
  title: string
  tag: string
  icon: ReactNode
  body: string
}

export const projects: Project[] = [
  {
    name: 'Placeholder',
    shot: 'placeholder shot',
    tags: ['Placeholder', 'Placeholder', 'Placeholder', 'Placeholder'],
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    long: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Placeholder',
    shot: 'placeholder shot',
    tags: ['Placeholder', 'Placeholder', 'Placeholder'],
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    long: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Placeholder',
    shot: 'placeholder shot',
    tags: ['Placeholder', 'Placeholder', 'Placeholder'],
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    long: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Placeholder',
    shot: 'placeholder shot',
    tags: ['Placeholder', 'Placeholder', 'Placeholder'],
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    long: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export const experience: Experience[] = [
  {
    period: 'Placeholder',
    role: 'Placeholder',
    org: 'Placeholder',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    period: 'Placeholder',
    role: 'Placeholder',
    org: 'Placeholder',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    period: 'Placeholder',
    role: 'Placeholder',
    org: 'Placeholder',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

export const skills = [
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'Tailwind',
  'React Native',
  'Docker',
  'Git',
]

export const hobbies: Hobby[] = [
  {
    title: 'Música',
    tag: 'HIP HOP',
    icon: <Music size={24} strokeWidth={1.7} />,
    body: 'Ouço de tudo, mas o hip hop domina a playlist — trilha sonora dos códigos, dos treinos e das mesas de RPG.',
  },
  {
    title: 'RPG de Mesa',
    tag: 'D&D',
    icon: <Dices size={24} strokeWidth={1.7} />,
    body: 'Jogo e mestro campanhas de Dungeons & Dragons. Adoro construir mundos, criar NPCs e conduzir histórias junto do grupo.',
  },
  {
    title: 'Corrida',
    tag: 'SÃO SILVESTRE',
    icon: <Footprints size={24} strokeWidth={1.7} />,
    body: 'Estou treinando para correr a minha primeira São Silvestre este ano. Um passo — e um quilômetro — de cada vez.',
  },
]
