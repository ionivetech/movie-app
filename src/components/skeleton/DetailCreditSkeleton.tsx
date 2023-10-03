const DetailCreditSkeleton = () => {
  return (
    <div className='flex space-x-3 overflow-x-auto no-scrollbar'>
      {[...Array(20)].map((e, i) => {
        return (
          <div
            key={`skeleton-credit-${i}`}
            className='flex flex-col items-center space-y-2'
          >
            <div className='w-20 h-20 rounded-full bg-slate-300 dark:bg-slate-700 animate-pulse' />
            <div className='w-28 h-5 rounded bg-slate-300 dark:bg-slate-700 animate-pulse' />
            <div className='w-28 h-4 rounded bg-slate-300 dark:bg-slate-700 animate-pulse' />
          </div>
        )
      })}
    </div>
  )
}

export default DetailCreditSkeleton
