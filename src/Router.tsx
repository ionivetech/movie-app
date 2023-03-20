import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
// Layouts
import ListLayout from '@/layouts/ListLayout'
const DetailLayout = lazy(() => import('@/layouts/DetailLayout'))
// Pages
import Popular from '@/views/Popular'
const TopRated = lazy(() => import('@/views/TopRated'))
const Detail = lazy(() => import('@/views/Detail'))

export default function Router() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route element={<ListLayout />}>
          <Route
            path='/'
            element={<Popular />}
          />
          <Route
            path='top-rated'
            element={<TopRated />}
          />
        </Route>

        <Route element={<DetailLayout />}>
          <Route
            path='detail/:id'
            element={<Detail />}
          />
        </Route>
      </Routes>
    </Suspense>
  )
}
