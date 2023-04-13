import { useState } from 'react'
import { NavLink } from 'react-router-dom'
// Stores
import { useAppDispatch } from 'stores/Hooks'
import { setMenuActive } from 'stores/MovieSlice'
// Interfaces
import type { IMenu } from '@/interfaces/IMenu'
// Hooks
import useDarkMode from '@/hooks/useDarkMode'
// Icons
import { Icon } from '@/assets/icons'
import { IconSearch, IconMoon, IconSun } from '@tabler/icons-react'

function Navbar() {
  // Variables
  const dispatch = useAppDispatch()
  const { theme, setTheme } = useDarkMode()
  const [darkMode, setDarkMode] = useState<boolean>(theme === 'dark' ? true : false)
  const menus: IMenu[] = [
    { href: '/', label: 'Popular' },
    { href: 'top-rated', label: 'Top Rated' },
  ]

  // Set menu active
  const setMenu = (menu: string) => dispatch(setMenuActive(menu))

  // Toggle dark mode
  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked)
    setTheme(checked ? 'dark' : 'light')
  }

  return (
    <div className='fixed top-0 left-0 w-full h-16 border-b border-slate-700/10 dark:border-slate-300/10 bg-background-light/[0.85] dark:bg-background/[0.85] backdrop-blur-lg z-[100]'>
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
          <h3 className='text-slate-800 dark:text-white font-medium text-xl mr-8'>Movie App</h3>

          {/* Menu */}
          <div className='space-x-4 hidden sm:block'>
            {menus.map((menu, index) => {
              return (
                <NavLink
                  to={menu.href}
                  key={`${menu.label}-${index}`}
                  onClick={() => setMenu(menu.href)}
                  className='text-slate-700 dark:text-slate-100'
                >
                  {menu.label}
                </NavLink>
              )
            })}
          </div>
        </div>

        {/* Right Side & Search Box */}
        <div className='flex items-center space-x-6'>
          <IconSearch
            size={20}
            className='text-slate-600 dark:text-slate-100'
          />

          {/* Toggle dark mode */}
          <div
            className='text-slate-600 dark:text-slate-100 cursor-pointer'
            aria-hidden={true}
            onClick={() => toggleDarkMode(!darkMode)}
          >
            {darkMode ? <IconSun size={20} /> : <IconMoon size={20} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
