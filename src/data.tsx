import { Music, Dices, Footprints } from 'lucide-react'
import type { ReactNode } from 'react'

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
  desc: string
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
    tags: ['React', 'Node.js', 'PostgreSQL'],
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
    tags: ['React', 'TypeScript', 'Tailwind'],
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
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
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
    tags: ['Node.js', 'Docker', 'Redis'],
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
    tags: ['React Native', 'Expo', 'Firebase'],
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
    tags: ['React', 'Vite', 'Tailwind'],
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
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
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
    tags: ['Node.js', 'React', 'MongoDB'],
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
    tags: ['React', 'CSS'],
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
    tags: ['Node.js', 'Express'],
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
    tags: ['JavaScript', 'HTML', 'CSS'],
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
    tags: ['Node.js', 'SQLite'],
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
