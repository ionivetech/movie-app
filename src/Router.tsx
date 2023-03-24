import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
// Layouts
import ListLayout from '@/layouts/ListLayout'
const DetailLayout = lazy(() => import('@/layouts/DetailLayout'))
// Pages
const List = lazy(() => import('@/views/List'))
const Detail = lazy(() => import('@/views/Detail'))

export default function Router() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route element={<ListLayout />}>
          {/* Popular */}
          <Route
            path='/'
            element={<List />}
          />

          {/* Top Rated */}
          <Route
            path='top-rated'
            element={<List />}
          />
        </Route>

        {/* Detail */}
        <Route element={<DetailLayout />}>
          <Route
            path='/:type/detail/:id'
            element={<Detail />}
          />
        </Route>
      </Routes>
    </Suspense>
  )
}
