// Interfaces
import type { IToggle } from '@/interfaces/IToggle'

// Props interface
interface IProps {
  toggles: IToggle[]
  toggleActive: string
  handleChangeToggle(value: string): unknown
}

const Toggle = (props: IProps) => {
  return (
    <div className='flex items-center space-x-2'>
      {props.toggles.map((toggle, index) => {
        return (
          <div
            key={toggle.id}
            className={`px-3 md:px-4 py-1 md:py-[6px] rounded-full bg-slate-200 dark:bg-slate-600 text-xs md:text-sm text-slate-600 dark:text-slate-100 tracking-wide whitespace-nowrap transition ease-in-out duration-200
                    ${
                      props.toggleActive === toggle.id
                        ? '!bg-blue-600 !text-slate-50 cursor-default'
                        : 'cursor-pointer'
                    }
                  `}
            tabIndex={index}
            role='button'
            onClick={() => props.handleChangeToggle(toggle.id)}
          >
            {toggle.label}
          </div>
        )
      })}
    </div>
  )
}

export default Toggle
