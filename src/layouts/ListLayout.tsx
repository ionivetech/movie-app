import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
// Interfaces
import type { IToggle } from '@/interfaces/IToggle'
// Stores
import { useAppSelector, useAppDispatch } from 'stores/Hooks'
import { setTabActive, getTabActive } from 'stores/MovieSlice'

function ListLayout() {
  // Variables
  const dispatch = useAppDispatch()
  const location = useLocation()
  const tabActive: string = useAppSelector(getTabActive)
  const tabs: IToggle[] = [
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
      {/* <div className='sticky top-[64px] flex space-x-3 bg-background mb-8 py-5 z-[1]'>
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
      </div> */}

      <Outlet />
    </>
  )
}

export default ListLayout
