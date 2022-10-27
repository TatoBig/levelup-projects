import Layout from '@components/layout'
import Four from '@pages/Four'
import Three from '@pages/Three'
import Two from '@pages/Two'
import { lazy, Suspense } from 'react'
import { type RouteObject } from 'react-router-dom'

const Index = lazy(() => import('@pages/index'))
const One = lazy(() => import('@pages/One'))
const Notfound = lazy(() => import('@pages/404'))

export const routes: Array<RouteObject> = [
  {
    index: true,
    element: (
      <Suspense>
        <Index />
      </Suspense>
    )
  },
  {
    path: '/one',
    index: true,
    element: (
      <Suspense>
        <One />
      </Suspense>
    )
  },
  {
    path: '/two',
    index: true,
    element: (
      <Suspense>
        <Two />
      </Suspense>
    )
  },
  {
    path: '/three',
    index: true,
    element: (
      <Suspense>
        <Three />
      </Suspense>
    )
  },
  {
    path: '/four',
    index: true,
    element: (
      <Suspense>
        <Four />
      </Suspense>
    )
  },
  {
    path: '*',
    element: (
      <Suspense>
        <Notfound />
      </Suspense>
    )
  }
]

export default routes
