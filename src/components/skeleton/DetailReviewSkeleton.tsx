const DetailReviewSkeleton = () => {
  return (
    <>
      {[...Array(10)].map((e, i) => {
        return (
          <div
            key={`skeleton-review-${i}`}
            className='w-full flex flex-col mb-5 last:mb-0 pb-5 last:pb-0 space-y-3 border-b last:border-b-0 dark:border-slate-800/70 border-slate-200'
          >
            <div className='flex items-center space-x-3'>
              <div className='md:w-14 w-12 md:h-14 h-12 rounded-full bg-slate-300 dark:bg-slate-700 animate-pulse' />
              <div className='flex flex-col space-y-2'>
                <div className='w-40 h-4 rounded bg-slate-300 dark:bg-slate-700 animate-pulse' />
                <div className='w-32 h-3 rounded bg-slate-300 dark:bg-slate-700 animate-pulse' />
              </div>
            </div>
            <div className='flex flex-col space-y-2'>
              <div className='w-4/5 h-4 rounded bg-slate-300 dark:bg-slate-700 animate-pulse' />
              <div className='w-3/4 h-4 rounded bg-slate-300 dark:bg-slate-700 animate-pulse' />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default DetailReviewSkeleton
