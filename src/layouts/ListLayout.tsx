import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
// Interfaces
import type { ITab } from 'interfaces/ITab'
// Stores
import { useAppSelector, useAppDispatch } from 'stores/Hooks'
import { setTabActive, getTabActive } from 'stores/MovieSlice'

function ListLayout() {
  // Variables
  const dispatch = useAppDispatch()
  const location = useLocation()
  const tabActive: string = useAppSelector(getTabActive)
  const tabs: ITab[] = [
    { id: 'movie', label: 'Movies' },
    { id: 'tv', label: 'TV Show' },
  ]

  // Reset to default if route change
  useEffect(() => {
    dispatch(setTabActive('movie'))
  }, [location.pathname])

  return (
    <>
      {/* Tab */}
      <div className='flex space-x-3 mb-8'>
        {tabs.map((tab, index) => {
          return (
            <div
              key={tab.id}
              className={`px-5 py-2 rounded-full bg-slate-600 text-sm text-slate-100 tracking-wider transition ease-in-out duration-200
                  ${tabActive === tab.id ? '!bg-blue-600 cursor-default' : 'cursor-pointer'}
                `}
              tabIndex={index}
              role='button'
              onClick={() => dispatch(setTabActive(tab.id))}
            >
              {tab.label}
            </div>
          )
        })}
      </div>

      <Outlet />
    </>
  )
}

export default ListLayout
