import { NavLink } from 'react-router-dom'
// Stores
import { useAppDispatch } from 'stores/Hooks'
import { setMenuActive } from '@/stores/MovieSlice'
// Interfaces
import type { IMenu } from '@/interfaces/IMenu'
// Components
import { Menu as DropdownMenu, Transition } from '@headlessui/react'
// Icons
import { IconChevronDown } from '@tabler/icons-react'

// Props interface
interface IProps {
  menu: IMenu
}

const Menu = (props: IProps) => {
  // Variables
  const dispatch = useAppDispatch()

  return (
    <DropdownMenu
      as='div'
      className='relative'
    >
      <DropdownMenu.Button className='flex items-center text-sm lg:text-base text-slate-900 dark:text-slate-100'>
        {props.menu.label}
        <IconChevronDown
          size={16}
          className='ml-2'
        />
      </DropdownMenu.Button>
      <Transition
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <DropdownMenu.Items className='absolute left-0 mt-2 w-40 flex flex-col bg-background-light dark:bg-background border dark:border-slate-300/10 p-2 space-y-1 rounded-md shadow-lg'>
          {props.menu.menus.map((menu, index) => (
            <DropdownMenu.Item key={`${menu.label}-${index}`}>
              {({ close }) => (
                <NavLink
                  to={menu.href}
                  onClick={() => {
                    close
                    dispatch(setMenuActive(props.menu.type))
                  }}
                  className='font-normal text-sm lg:text-base text-slate-900 dark:text-slate-100 py-1 px-2 hover:bg-slate-200 hover:dark:bg-slate-800 rounded-md transition ease-in-out duration-150'
                >
                  {menu.label}
                </NavLink>
              )}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Items>
      </Transition>
    </DropdownMenu>
  )
}

export default Menu
