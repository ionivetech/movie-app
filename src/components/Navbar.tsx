import { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
// Interfaces
import type { IMenu } from '@/interfaces/IMenu'
// Hooks
import useDarkMode from '@/hooks/useDarkMode'
// Components
import Menu from 'components/Menu'
import ModalSearch from 'components/ModalSearch'
// Icons
import { Icon } from '@/assets/icons'
import { IconSearch, IconMoon, IconSun } from '@tabler/icons-react'

const Navbar = () => {
  // Variables
  const modalSearchRef = useRef<{ openModal: () => void }>(null)
  const { theme, setTheme } = useDarkMode()
  const [darkMode, setDarkMode] = useState<boolean>(theme === 'dark' ? true : false)
  const moviesMenu: IMenu = {
    type: 'movie',
    label: 'Movies',
    menus: [
      { href: 'movie/popular', label: 'Popular' },
      { href: 'movie/now-playing', label: 'Now Playing' },
      { href: 'movie/top-rated', label: 'Top Rated' },
      { href: 'movie/upcoming', label: 'Upcoming' },
    ],
  }
  const tvMenu: IMenu = {
    type: 'tv',
    label: 'TV Shows',
    menus: [
      { href: 'tv/popular', label: 'Popular' },
      { href: 'tv/airing-today', label: 'Airing Today' },
      { href: 'tv/on-the-air', label: 'On TV' },
      { href: 'tv/top-rated', label: 'Top Rated' },
    ],
  }

  // Toggle dark mode
  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked)
    setTheme(checked ? 'dark' : 'light')
  }

  return (
    <div className='fixed top-0 left-0 flex flex-col w-full md:h-16 h-24 border-b border-slate-700/10 dark:border-slate-300/10 bg-background-light/[0.85] dark:bg-background/70 backdrop-blur z-[100]'>
      <div className='container h-full flex items-center justify-between'>
        {/* Left Side */}
        <NavLink
          to='/'
          className='flex items-center'
        >
          {/* App Icon */}
          <img
            src={Icon}
            alt='application-icon'
            className='md:w-9 md:h-9 w-8 h-8 mr-4'
          />

          {/* Title */}
          <h3 className='text-slate-800 dark:text-slate-100 font-medium text-xl mr-8'>Movie App</h3>

          {/* Menu */}
          <div className='md:flex hidden items-center space-x-7'>
            <Menu menu={moviesMenu} />
            <Menu menu={tvMenu} />
          </div>
        </NavLink>

        {/* Right Side & Search Box */}
        <div className='flex items-center space-x-6'>
          <IconSearch
            size={20}
            className='text-slate-600 dark:text-slate-100 cursor-pointer'
            onClick={() => modalSearchRef.current?.openModal()}
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

      {/* Menu if mobile view */}
      <div className='md:hidden py-2 border-t border-slate-700/10 dark:border-slate-300/10'>
        <div className='container flex space-x-6'>
          <Menu menu={moviesMenu} />
          <Menu menu={tvMenu} />
        </div>
      </div>

      {/* Modal Search */}
      <ModalSearch ref={modalSearchRef} />
    </div>
  )
}

export default Navbar
