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
    name: 'Aurora Finance',
    shot: 'dashboard shot',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind'],
    desc: 'Painel financeiro pessoal para acompanhar gastos, metas e orçamentos com dashboards em tempo real.',
    long: 'Aplicação web que centraliza contas, metas e orçamentos em um só lugar. Gráficos interativos, categorização automática de transações e sincronização em tempo real via Firebase.',
  },
  {
    name: 'TaskFlow',
    shot: 'kanban shot',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    desc: 'App Kanban full-stack MERN com modo claro/escuro e colaboração em tempo real entre times.',
    long: 'Ferramenta de gestão de tarefas no estilo Kanban. Arraste e solte cartões, colabore em tempo real, alterne entre temas e organize fluxos com colunas personalizáveis.',
  },
  {
    name: 'DiceForge',
    shot: 'rpg tool shot',
    tags: ['Vue', 'Nuxt', 'Pinia'],
    desc: 'Ferramenta para mestres de RPG gerenciarem campanhas, NPCs e rolagens de dados em uma mesa digital.',
    long: 'Companion para mestres de Dungeons & Dragons: fichas de NPCs, iniciativa de combate, rolador de dados e anotações de campanha — tudo em uma mesa digital fluida.',
  },
  {
    name: 'RotaVerde',
    shot: 'mobile app shot',
    tags: ['React Native', 'Expo', 'Supabase'],
    desc: 'App mobile que sugere rotas de corrida e ciclismo mais seguras e arborizadas na cidade.',
    long: 'App mobile que combina dados de vias e áreas verdes para sugerir os melhores percursos de corrida e ciclismo, com registro de tempos e histórico de treinos.',
  },
]

export const experience: Experience[] = [
  {
    period: '2023 — PRESENTE',
    role: 'Desenvolvedor Full-Stack Pleno',
    org: 'Nimbus Tech',
    desc: 'Lidero o desenvolvimento de features ponta a ponta em uma plataforma SaaS usada por milhares de usuários, do banco de dados à interface.',
  },
  {
    period: '2021 — 2023',
    role: 'Desenvolvedor Front-End',
    org: 'Studio Vermelho',
    desc: 'Construí interfaces responsivas e um design system reutilizável para clientes de e-commerce, elevando a consistência entre produtos.',
  },
  {
    period: '2020 — 2021',
    role: 'Estagiário de Desenvolvimento',
    org: 'CodeLab',
    desc: 'Primeiros passos profissionais com JavaScript, APIs REST e bancos de dados relacionais em um time ágil.',
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
