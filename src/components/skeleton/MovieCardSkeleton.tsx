// Local interface
interface IProps {
  isHorizontal?: boolean
}

const MovieCardSkeleton = (props: IProps) => {
  const { isHorizontal = false } = props

  return (
    <>
      {[...Array(20)].map((e, i) => {
        return (
          <div
            key={`skeleton-${i}`}
            className={
              isHorizontal
                ? 'min-w-[155px] md:min-w-[170px] lg:min-w-[180px] flex flex-col'
                : 'flex flex-col'
            }
          >
            <div className='w-full h-[222px] md:h-[262px] lg:h-[312px] mb-3 rounded-xl bg-slate-300 dark:bg-slate-700 animate-pulse' />
            <div className='w-full h-5 mb-2 rounded-lg bg-slate-300 dark:bg-slate-700 animate-pulse' />
            <div className='flex justify-between items-center'>
              <div className='w-2/6 h-5 rounded-lg bg-slate-300 dark:bg-slate-700 animate-pulse' />
              <div className='w-5/12 h-5 rounded-lg bg-slate-300 dark:bg-slate-700 animate-pulse' />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default MovieCardSkeleton
