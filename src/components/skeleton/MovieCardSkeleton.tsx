export const MovieCardSkeleton = () => {
  return (
    <>
      {[...Array(20)].map((e, i) => {
        return (
          <div
            key={`skeleton-${i}`}
            className='flex flex-col'
          >
            <div className='w-full h-[312px] mb-3 rounded-xl bg-slate-800 animate-pulse' />
            <div className='w-full h-5 mb-2 rounded-lg bg-slate-800 animate-pulse' />
            <div className='flex justify-between items-center'>
              <div className='w-2/6 h-5 rounded-lg bg-slate-800 animate-pulse' />
              <div className='w-5/12 h-5 rounded-lg bg-slate-800 animate-pulse' />
            </div>
          </div>
        )
      })}
    </>
  )
}
