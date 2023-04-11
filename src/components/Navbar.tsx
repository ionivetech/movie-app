import { NavLink } from 'react-router-dom'
// Stores
import { useAppDispatch } from 'stores/Hooks'
import { setMenuActive } from 'stores/MovieSlice'
// Interfaces
import type { IMenu } from '@/interfaces/IMenu'
// Icons
import { Icon } from '@/assets/icons'
import { IconSearch } from '@tabler/icons-react'

function Navbar() {
  // Variables
  const dispatch = useAppDispatch()
  const menus: IMenu[] = [
    { href: '/', label: 'Popular' },
    { href: 'top-rated', label: 'Top Rated' },
  ]

  // Set menu active
  const setMenu = (menu: string) => dispatch(setMenuActive(menu))

  return (
    <div className='fixed top-0 left-0 w-full h-16 border-b border-slate-300/10 bg-background/[0.85] backdrop-blur-lg z-[100]'>
      <div className='container h-full flex items-center justify-between'>
        {/* Left Side */}
        <div className='flex items-center'>
          {/* App Icon */}
          <img
            src={Icon}
            alt='application-icon'
            className='w-9 h-9 mr-4'
          />

          {/* Title */}
          <h3 className='text-white font-medium text-xl mr-8'>Movie App</h3>

          {/* Menu */}
          <div className='space-x-4'>
            {menus.map((menu, index) => {
              return (
                <NavLink
                  to={menu.href}
                  key={`${menu.label}-${index}`}
                  onClick={() => setMenu(menu.href)}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-blue-500 font-medium text-base'
                      : 'text-slate-100 font-medium text-base'
                  }
                >
                  {menu.label}
                </NavLink>
              )
            })}
          </div>
        </div>

        {/* Right Side & Search Box */}
        <IconSearch
          size={20}
          className='text-slate-100'
        />
      </div>
    </div>
  )
}

export default Navbar
