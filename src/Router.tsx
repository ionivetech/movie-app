import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Popular from '@/views/Popular'
const TopRated = lazy(() => import('@/views/TopRated'))

export default function Router() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route
          path='/'
          element={<Popular />}
        />
        <Route
          path='top-rated'
          element={<TopRated />}
        />
      </Routes>
    </Suspense>
  )
}
