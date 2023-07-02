import { BaseSyntheticEvent } from 'react'
// Interfaces
import { IMovieCredits } from 'interfaces/IMovieCredits'
// Components
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component'
// Images
import { DummyUser } from '@/assets/images'
// Style effect
import 'react-lazy-load-image-component/src/effects/black-and-white.css'

// Local interfaces
interface IProps {
  credits: IMovieCredits[]
}

const DetailCredits = ({ credits }: IProps) => {
  return (
    <div className='flex space-x-3 overflow-x-auto no-scrollbar scroll-smooth'>
      {credits.map((credit, index) => (
        <div
          key={`credit-${index}`}
          className='w-[120px] min-w-[120px] max-w-[120px] flex flex-col items-center space-y-1'
        >
          <LazyLoadImage
            src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${credit.profile_path}`}
            alt={credit.name}
            useIntersectionObserver={true}
            threshold={100}
            placeholderSrc={
              <div className='bg-slate-300 dark:bg-slate-800 animate-pulse w-20 min-w-[80px] max-w-[80px] h-20 min-h-[80px] max-h-[80px] rounded-full' />
            }
            effect='black-and-white'
            onError={(event: BaseSyntheticEvent) => {
              event.currentTarget.onerror = null
              event.currentTarget.src = DummyUser
            }}
            className='w-20 min-w-[80px] max-w-[80px] h-20 min-h-[80px] max-h-[80px] rounded-full object-cover bg-center shadow'
          />
          <p className='font-medium text-sm text-slate-950 dark:text-slate-100 text-center'>
            {credit.name}
          </p>
          <p className='text-sm text-slate-600 dark:text-zinc-400 text-center'>
            {credit.character}
          </p>
        </div>
      ))}
    </div>
  )
}

export default trackWindowScroll(DetailCredits)
