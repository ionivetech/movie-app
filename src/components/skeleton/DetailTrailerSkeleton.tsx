const DetailTrailerSkeleton = () => {
  return (
    <div className='flex space-x-6 overflow-x-auto no-scrollbar'>
      {[...Array(20)].map((e, i) => {
        return (
          <div
            key={`skeleton-trailer-${i}`}
            className='bg-slate-300 dark:bg-slate-800 animate-pulse lg:w-[500px] md:w-[450px] w-[360px] lg:h-[300px] md:h-[250px] h-[200px] rounded-lg'
          />
        )
      })}
    </div>
  )
}

export default DetailTrailerSkeleton
