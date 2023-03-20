import { NavLink } from 'react-router-dom'
// Interfaces
import type { IMenu } from '@/interfaces/IMenu'
// Icons
import { icon } from '@/assets/icons'

function Navbar() {
  const menus: IMenu[] = [
    { href: '/', label: 'Popular' },
    { href: 'top-rated', label: 'Top Rated' },
  ]

  return (
    <div className='fixed top-0 left-0 w-full h-16 border-b border-slate-300/10 bg-background/90 backdrop-blur'>
      <div className='container h-full flex items-center justify-between'>
        {/* Left Side */}
        <div className='flex items-center'>
          {/* App Icon */}
          <img
            src={icon}
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
        <input
          type='text'
          placeholder='Search..'
          className='max-w-[300px] h-10 px-4 bg-slate-800 text-slate-200 border border-transparent rounded-md shadow placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out'
        />
      </div>
    </div>
  )
}

export default Navbar
