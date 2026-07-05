import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage'

export const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        { path: '/', element: <HomePage /> },
        {
          path: '/sobre',
          lazy: () => import('./pages/AboutMePage').then((m) => ({ Component: m.default })),
        },
        {
          path: '/projetos',
          lazy: () =>
            import('./pages/projects/AllProjectsPage').then((m) => ({ Component: m.default })),
        },
        {
          path: '/projetos/:slug',
          lazy: () =>
            import('./pages/projects/ProjectRoute').then((m) => ({ Component: m.default })),
        },
        {
          path: '*',
          lazy: () => import('./pages/NotFoundPage').then((m) => ({ Component: m.default })),
        },
      ],
    },
  ],
  // Vite's BASE_URL is '/MeuPortfolio/' in build; the router wants it without
  // the trailing slash.
  { basename: import.meta.env.BASE_URL.replace(/\/$/, '') },
)
