import { Music, Dices, Footprints } from 'lucide-react'
import type { ReactNode } from 'react'

/**
 * URL de imagem de placeholder (Picsum), estável por seed — os projetos ainda
 * não têm capturas de tela reais, então isso dá uma noção visual do layout
 * com fotos de verdade em vez do padrão de linhas diagonais.
 */
export function placeholderImage(seed: string, width = 800, height = 600): string {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`
}

export interface ProjectLinks {
  demo?: string
  repo?: string
}

export interface ProjectBase {
  slug: string
  name: string
  year: string
  role: string
  tags: string[]
  desc: string
  shot: string
  links: ProjectLinks
}

export type TagCategory = 'stack' | 'plataforma' | 'proposito' | 'competencia'

/** Classifica cada tag conhecida; tags não listadas caem no filtro "Tag" genérico. */
export const tagCategories: Record<string, TagCategory> = {
  React: 'stack',
  'Node.js': 'stack',
  TypeScript: 'stack',
  PostgreSQL: 'stack',
  'Next.js': 'stack',
  Prisma: 'stack',
  Docker: 'stack',
  Redis: 'stack',
  'React Native': 'stack',
  Expo: 'stack',
  Firebase: 'stack',
  Vite: 'stack',
  Tailwind: 'stack',
  Stripe: 'stack',
  MongoDB: 'stack',
  Express: 'stack',
  JavaScript: 'stack',
  HTML: 'stack',
  CSS: 'stack',
  SQLite: 'stack',
  Web: 'plataforma',
  Mobile: 'plataforma',
  Desktop: 'plataforma',
  API: 'plataforma',
  'E-commerce': 'proposito',
  Dashboard: 'proposito',
  'Landing Page': 'proposito',
  SaaS: 'proposito',
  Ferramenta: 'proposito',
  Jogo: 'proposito',
  Acessibilidade: 'competencia',
  Performance: 'competencia',
  'UI/UX': 'competencia',
  Testes: 'competencia',
  'Tempo Real': 'competencia',
  Autenticação: 'competencia',
}

/**
 * Os 8 projetos de destaque. Cada um tem uma página própria, feita à mão,
 * em src/pages/projects/flagship — aqui ficam apenas os metadados usados
 * por cards, listagem e pela moldura da página (ProjectPageShell).
 */
export interface FeaturedProject extends ProjectBase {
  tagline: string
  /** Cor de destaque da página do projeto (deve ler bem nos temas claro e escuro). */
  accent: string
  /** Versão translúcida do accent para chips, fundos e glows. */
  accentSoft: string
}

/** Projetos menores — renderizados pela página genérica (GenericProjectPage). */
export interface MinorProject extends ProjectBase {
  long: string
  highlights: string[]
}

export interface Experience {
  period: string
  role: string
  org: string
  /** Caminho da logo da empresa (ex: '/logos/empresa.svg'). Vazio = usa o monograma. */
  logo?: string
  /** Tecnologias usadas na experiência. */
  stack: string[]
  /** Atividades principais, uma por bullet. */
  activities: string[]
}

/** Cartão-resumo fixo ao lado da timeline de experiências. */
export interface ExperienceSnapshot {
  stats: { value: string; label: string }[]
  available: boolean
  availability: string
  coreStack: string[]
  cvHref: string
}

export interface Education {
  period: string
  degree: string
  institution: string
  desc: string
  highlights?: string[]
}

export interface Hobby {
  title: string
  tag: string
  icon: ReactNode
  body: string
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: 'projeto-um',
    name: 'Projeto Um',
    tagline: 'Uma frase de impacto sobre o que este projeto resolve.',
    year: '2026',
    role: 'Full-Stack',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Web', 'SaaS', 'Autenticação'],
    desc: 'Resumo curto do projeto para o card da home. Uma ou duas frases no máximo.',
    shot: 'screenshot principal',
    links: { demo: '#', repo: '#' },
    accent: '#e09112',
    accentSoft: 'rgba(224, 145, 18, 0.12)',
  },
  {
    slug: 'projeto-dois',
    name: 'Projeto Dois',
    tagline: 'Uma frase de impacto sobre o que este projeto resolve.',
    year: '2026',
    role: 'Front-End',
    tags: ['React', 'TypeScript', 'Tailwind', 'Web', 'Dashboard', 'UI/UX'],
    desc: 'Resumo curto do projeto para o card da home. Uma ou duas frases no máximo.',
    shot: 'screenshot principal',
    links: { demo: '#', repo: '#' },
    accent: '#0d9488',
    accentSoft: 'rgba(13, 148, 136, 0.12)',
  },
  {
    slug: 'projeto-tres',
    name: 'Projeto Três',
    tagline: 'Uma frase de impacto sobre o que este projeto resolve.',
    year: '2025',
    role: 'Full-Stack',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Web', 'SaaS', 'Performance'],
    desc: 'Resumo curto do projeto para o card da home. Uma ou duas frases no máximo.',
    shot: 'screenshot principal',
    links: { demo: '#', repo: '#' },
    accent: '#8b5cf6',
    accentSoft: 'rgba(139, 92, 246, 0.12)',
  },
  {
    slug: 'projeto-quatro',
    name: 'Projeto Quatro',
    tagline: 'Uma frase de impacto sobre o que este projeto resolve.',
    year: '2025',
    role: 'Back-End',
    tags: ['Node.js', 'Docker', 'Redis', 'API', 'Ferramenta', 'Tempo Real'],
    desc: 'Resumo curto do projeto para o card da home. Uma ou duas frases no máximo.',
    shot: 'screenshot principal',
    links: { demo: '#', repo: '#' },
    accent: '#65a30d',
    accentSoft: 'rgba(101, 163, 13, 0.12)',
  },
  {
    slug: 'projeto-cinco',
    name: 'Projeto Cinco',
    tagline: 'Uma frase de impacto sobre o que este projeto resolve.',
    year: '2025',
    role: 'Full-Stack',
    tags: ['React Native', 'Expo', 'Firebase', 'Mobile', 'SaaS', 'Tempo Real'],
    desc: 'Resumo curto do projeto para o card da home. Uma ou duas frases no máximo.',
    shot: 'screenshot principal',
    links: { demo: '#', repo: '#' },
    accent: '#0891b2',
    accentSoft: 'rgba(8, 145, 178, 0.12)',
  },
  {
    slug: 'projeto-seis',
    name: 'Projeto Seis',
    tagline: 'Uma frase de impacto sobre o que este projeto resolve.',
    year: '2024',
    role: 'Front-End',
    tags: ['React', 'Vite', 'Tailwind', 'Web', 'Landing Page', 'Acessibilidade'],
    desc: 'Resumo curto do projeto para o card da home. Uma ou duas frases no máximo.',
    shot: 'screenshot principal',
    links: { demo: '#', repo: '#' },
    accent: '#db2777',
    accentSoft: 'rgba(219, 39, 119, 0.12)',
  },
  {
    slug: 'projeto-sete',
    name: 'Projeto Sete',
    tagline: 'Uma frase de impacto sobre o que este projeto resolve.',
    year: '2024',
    role: 'Full-Stack',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Web', 'E-commerce', 'Autenticação'],
    desc: 'Resumo curto do projeto para o card da home. Uma ou duas frases no máximo.',
    shot: 'screenshot principal',
    links: { demo: '#', repo: '#' },
    accent: '#ea580c',
    accentSoft: 'rgba(234, 88, 12, 0.12)',
  },
  {
    slug: 'projeto-oito',
    name: 'Projeto Oito',
    tagline: 'Uma frase de impacto sobre o que este projeto resolve.',
    year: '2024',
    role: 'Full-Stack',
    tags: ['Node.js', 'React', 'MongoDB', 'Web', 'Dashboard', 'Testes'],
    desc: 'Resumo curto do projeto para o card da home. Uma ou duas frases no máximo.',
    shot: 'screenshot principal',
    links: { demo: '#', repo: '#' },
    accent: '#2563eb',
    accentSoft: 'rgba(37, 99, 235, 0.12)',
  },
]

export const minorProjects: MinorProject[] = [
  {
    slug: 'projeto-menor-um',
    name: 'Projeto Menor Um',
    year: '2024',
    role: 'Front-End',
    tags: ['React', 'CSS', 'Web', 'Landing Page', 'UI/UX'],
    desc: 'Resumo curto do projeto para a listagem.',
    shot: 'screenshot',
    links: { demo: '#', repo: '#' },
    long: 'Descrição mais completa do projeto: o que ele faz, por que foi construído e o que você aprendeu no processo. Dois ou três parágrafos curtos funcionam bem aqui.',
    highlights: [
      'Primeiro destaque técnico ou funcional do projeto.',
      'Segundo destaque — uma decisão de arquitetura, uma feature interessante.',
      'Terceiro destaque — resultado, aprendizado ou métrica.',
    ],
  },
  {
    slug: 'projeto-menor-dois',
    name: 'Projeto Menor Dois',
    year: '2024',
    role: 'Full-Stack',
    tags: ['Node.js', 'Express', 'API', 'Ferramenta', 'Autenticação'],
    desc: 'Resumo curto do projeto para a listagem.',
    shot: 'screenshot',
    links: { repo: '#' },
    long: 'Descrição mais completa do projeto: o que ele faz, por que foi construído e o que você aprendeu no processo.',
    highlights: [
      'Primeiro destaque técnico ou funcional do projeto.',
      'Segundo destaque — uma decisão de arquitetura, uma feature interessante.',
    ],
  },
  {
    slug: 'projeto-menor-tres',
    name: 'Projeto Menor Três',
    year: '2023',
    role: 'Front-End',
    tags: ['JavaScript', 'HTML', 'CSS', 'Web', 'Jogo', 'Acessibilidade'],
    desc: 'Resumo curto do projeto para a listagem.',
    shot: 'screenshot',
    links: { demo: '#' },
    long: 'Descrição mais completa do projeto: o que ele faz, por que foi construído e o que você aprendeu no processo.',
    highlights: [
      'Primeiro destaque técnico ou funcional do projeto.',
      'Segundo destaque — uma decisão de arquitetura, uma feature interessante.',
    ],
  },
  {
    slug: 'projeto-menor-quatro',
    name: 'Projeto Menor Quatro',
    year: '2023',
    role: 'Back-End',
    tags: ['Node.js', 'SQLite', 'Desktop', 'Ferramenta', 'Performance'],
    desc: 'Resumo curto do projeto para a listagem.',
    shot: 'screenshot',
    links: { repo: '#' },
    long: 'Descrição mais completa do projeto: o que ele faz, por que foi construído e o que você aprendeu no processo.',
    highlights: [
      'Primeiro destaque técnico ou funcional do projeto.',
      'Segundo destaque — uma decisão de arquitetura, uma feature interessante.',
    ],
  },
]

export type Project = FeaturedProject | MinorProject
export const allProjects: Project[] = [...featuredProjects, ...minorProjects]

/** Recomendados: rankeia por nº de tags em comum; completa com os demais se faltar. */
export function getRecommendedProjects(slug: string, limit = 4): Project[] {
  const current = allProjects.find((p) => p.slug === slug)
  const others = allProjects.filter((p) => p.slug !== slug)
  if (!current) return others.slice(0, limit)

  const score = (p: Project) => p.tags.filter((t) => current.tags.includes(t)).length

  return others
    .map((p, i) => ({ p, s: score(p), i }))
    .sort((a, b) => b.s - a.s || a.i - b.i)
    .slice(0, limit)
    .map((r) => r.p)
}

export const experience: Experience[] = [
  {
    period: 'Placeholder — Atual',
    role: 'Placeholder',
    org: 'Empresa Placeholder',
    logo: '',
    stack: ['React', 'TypeScript', 'Node.js'],
    activities: [
      'Primeira atividade principal — o que você fez e o impacto gerado.',
      'Segunda atividade — uma responsabilidade técnica ou entrega relevante.',
      'Terceira atividade — colaboração, processo ou resultado mensurável.',
    ],
  },
  {
    period: 'Placeholder',
    role: 'Placeholder',
    org: 'Empresa Placeholder',
    logo: '',
    stack: ['JavaScript', 'CSS', 'Git'],
    activities: [
      'Primeira atividade principal — o que você fez e o impacto gerado.',
      'Segunda atividade — uma responsabilidade técnica ou entrega relevante.',
    ],
  },
  {
    period: 'Placeholder',
    role: 'Placeholder',
    org: 'Empresa Placeholder',
    logo: '',
    stack: ['HTML', 'CSS', 'JavaScript'],
    activities: [
      'Primeira atividade principal — o que você fez e o impacto gerado.',
      'Segunda atividade — uma responsabilidade técnica ou entrega relevante.',
    ],
  },
]

export const experienceSnapshot: ExperienceSnapshot = {
  stats: [
    { value: '2+', label: 'anos de experiência' },
    { value: '8', label: 'projetos entregues' },
  ],
  available: true,
  availability: 'Disponível para novos projetos',
  coreStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  cvHref: '#',
}

export const education: Education[] = [
  {
    period: '2023 — 2027',
    degree: 'Nome do curso (ex: Bacharelado em Ciência da Computação)',
    institution: 'Nome da instituição',
    desc: 'Breve descrição do curso, foco de estudo ou área de interesse durante a graduação.',
    highlights: ['Destaque acadêmico, projeto de pesquisa ou atividade relevante.'],
  },
  {
    period: '2024',
    degree: 'Nome do curso ou certificação',
    institution: 'Plataforma ou instituição',
    desc: 'Breve descrição do que foi estudado e como isso se conecta com o seu trabalho.',
  },
  {
    period: '2022',
    degree: 'Nome do curso técnico ou bootcamp',
    institution: 'Instituição',
    desc: 'Breve descrição da formação e das principais tecnologias abordadas.',
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
