import { useState } from 'react'
// Interfaces
import { IMovieReviews } from 'interfaces/IMovieReviews'
// Icons
import { IconStarFilled } from '@tabler/icons-react'
// Images
import { DummyUser } from '@/assets/images'

// Local interface
interface IProps {
  reviews: IMovieReviews[]
}

const DetailReviews = ({ reviews }: IProps) => {
  const [dataReviews, setDataReviews] = useState<IMovieReviews[]>(reviews)

  // Handle read more
  const handleReadMore = (id: string) => {
    const updateData = dataReviews.map((review) => {
      if (review.id === id) {
        return {
          ...review,
          read_more: !review.read_more,
        }
      } else return review
    })

    setDataReviews(updateData)
  }

  // Format date
  const formatDate = (timestamp: string) => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const date = new Date(timestamp)
    const day = String(date.getDate()).padStart(2, '0')
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const second = String(date.getSeconds()).padStart(2, '0')
    return `${day} ${month} ${year} ${hours}:${minutes}:${second}`
  }

  // Error image
  const onErrorImage = (e: any) => (e.target.src = DummyUser)

  return (
    <div>
      {dataReviews.map((review, index) => (
        <div
          key={`review-${index}`}
          className='w-full flex flex-col mb-5 last:mb-0 pb-5 last:pb-0 space-y-3 border-b last:border-b-0 dark:border-slate-800/70 border-slate-200'
        >
          <div className='w-full flex justify-between'>
            {/* Avatar & profile name */}
            <div className='flex items-center space-x-3'>
              <img
                src={
                  review.author_details.avatar_path
                    ? review.author_details.avatar_path.replace('/https', 'https')
                    : DummyUser
                }
                alt={review.author}
                onError={onErrorImage}
                className='md:w-14 w-12 md:h-14 h-12 rounded-full shadow'
              />
              <div>
                <p className='font-semibold text-slate-950 dark:text-slate-100 text-base'>
                  {review.author}
                </p>
                <p className='font-normal text-slate-600 dark:text-zinc-400 text-xs'>
                  {formatDate(review.created_at)}
                </p>
              </div>
            </div>

            {/* Rating */}
            {review.author_details.rating && (
              <div className='flex space-x-1'>
                <IconStarFilled className='w-3 md:w-4 text-yellow-500 dark:text-yellow-600 md:-mt-[3px] -mt-[5px]' />
                <p className='text-xs md:text-sm text-slate-600 dark:text-zinc-400'>
                  {review.author_details.rating}
                </p>
              </div>
            )}
          </div>

          {review.content.length > 300 && (
            <>
              <p className='font-normal md:text-base text-sm text-slate-950 dark:text-slate-100 md:leading-loose leading-relaxed'>
                {review.read_more ? review.content : `${review.content.slice(0, 299)}...`}
              </p>
              <button
                className='w-min font-medium text-blue-500 whitespace-nowrap cursor-pointer'
                onClick={() => handleReadMore(review.id)}
              >
                {review.read_more ? 'Less' : 'Read More'}
              </button>
            </>
          )}

          {review.content.length <= 300 && (
            <p className='font-normal md:text-base text-sm text-slate-950 dark:text-slate-100 md:leading-loose leading-relaxed'>
              {review.content}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export default DetailReviews
