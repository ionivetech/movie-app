import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// Services
import {
  getDetail,
  getCredits,
  getTrailers,
  getReviews,
  getRecommendation,
} from 'services/MovieApi'
// Interfaces
import type { IMovie } from 'interfaces/IMovie'
import { IDetailPayload } from 'interfaces/IPayloads'
import { IMovieDetail } from 'interfaces/IMovieDetail'
import { IMovieCredits } from 'interfaces/IMovieCredits'
import { IMovieTrailers } from 'interfaces/IMovieTrailers'
import { IMovieReviews } from 'interfaces/IMovieReviews'
// Components
import MovieCard from 'components/MovieCard'
import DetailDescription from 'views/partials/DetailDescription'
import DetailCredits from 'views/partials/DetailCredits'
import DetailTrailers from 'views/partials/DetailTrailers'
import DetailDescriptionSkeleton from 'components/skeleton/DetailDescriptionSkeleton'
import DetailCreditSkeleton from 'components/skeleton/DetailCreditSkeleton'
import DetailTrailerSkeleton from 'components/skeleton/DetailTrailerSkeleton'
import DetailReviewSkeleton from 'components/skeleton/DetailReviewSkeleton'
import DetailReviews from './partials/DetailReviews'
import MovieCardSkeleton from 'components/skeleton/MovieCardSkeleton'

const Detail = () => {
  // Variables
  const apiKey: string = import.meta.env.VITE_API_KEY
  const { type, id } = useParams()
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [detail, setDetail] = useState<IMovieDetail | null>(null)
  const [credits, setCredits] = useState<IMovieCredits[]>([])
  const [trailers, setTrailers] = useState<IMovieTrailers[]>([])
  const [reviews, setReviews] = useState<IMovieReviews[]>([])
  const [recommendations, setRecommendations] = useState<IMovie[]>([])

  // Get Detail Movie
  const getDetailMovie = async () => {
    const payload: IDetailPayload = {
      api_key: apiKey,
      language: 'en-US',
    }

    const resData = await getDetail(type || '', id || '', payload)
    if (resData.data) setDetail(resData.data)

    const resCredits = await getCredits(type || '', id || '', payload)
    if (resCredits.data) setCredits(resCredits.data.cast)

    const resTrailers = await getTrailers(type || '', id || '', payload)
    if (resTrailers.data && resTrailers.data.results.length > 0)
      setTrailers(
        resTrailers.data.results
          .filter(
            (trailer: IMovieTrailers) =>
              trailer.site === 'YouTube' &&
              (trailer.type === 'Teaser' || trailer.type === 'Trailer') &&
              trailer.official
          )
          .slice(0, 5)
      )

    const resReviews = await getReviews(type || '', id || '', payload)
    if (resReviews.data) {
      setReviews(
        resReviews.data.results.map((review: IMovieReviews) => {
          review.read_more = false
          return review
        })
      )
    }

    const resRecommendations = await getRecommendation(type || '', id || '', payload)
    if (resRecommendations.data && resRecommendations.data.results.length > 0)
      setRecommendations(resRecommendations.data.results)

    Promise.all([resData, resCredits, resTrailers, resReviews, resRecommendations]).then(() => {
      setIsLoading(false)
    })
    setIsFirstLoad(false)
  }

  // Reset data
  const resetData = () => {
    setDetail(null)
    setCredits([])
    setTrailers([])
    setReviews([])
    setRecommendations([])
  }

  // Mounted
  useEffect(() => {
    getDetailMovie()
  }, [])

  // Refetch if params id is change
  useEffect(() => {
    if (!isFirstLoad) {
      window.scrollTo(0, 0)
      resetData()
      setIsLoading(true)
      getDetailMovie()
    }
  }, [id])

  return (
    detail && (
      <>
        {/* Banner, poster & description */}
        {isLoading && <DetailDescriptionSkeleton />}
        {!isLoading && <DetailDescription movie={detail} />}

        <div className='container md:mt-16 mt-10 md:space-y-12 space-y-8'>
          {/* Credits */}
          <div>
            <p className='font-bold tracking-wide xl:text-2xl md:text-xl text-lg text-slate-950 dark:text-slate-100 mb-3'>
              Full Cast
            </p>
            {isLoading && <DetailCreditSkeleton />}
            {!isLoading && <DetailCredits credits={credits} />}
          </div>

          {/* Videos */}
          <div>
            <p className='font-bold tracking-wide xl:text-2xl md:text-xl text-lg text-slate-950 dark:text-slate-100 mb-3'>
              Videos
            </p>
            {isLoading && <DetailTrailerSkeleton />}
            {!isLoading && <DetailTrailers trailers={trailers} />}
          </div>

          {/* Reviews */}
          <div>
            <p className='font-bold tracking-wide xl:text-2xl md:text-xl text-lg text-slate-950 dark:text-slate-100 mb-3'>
              Reviews
            </p>
            {isLoading && <DetailReviewSkeleton />}
            {!isLoading && <DetailReviews reviews={reviews} />}
          </div>

          {/* Recommendations */}
          <div className='mt-8 pt-8 border-t dark:border-slate-800 border-slate-200'>
            <p className='font-bold tracking-wide xl:text-2xl md:text-xl text-lg text-slate-950 dark:text-slate-100 mb-3'>
              Recommendations
            </p>
            <div className='flex space-x-5 snap-x overflow-x-auto no-scrollbar scroll-smooth'>
              {!isLoading &&
                recommendations.length > 0 &&
                recommendations.map((recommendation) => {
                  return (
                    <div
                      key={recommendation.id}
                      className='min-w-[155px] md:min-w-[170px] lg:min-w-[180px] flex flex-col'
                    >
                      <MovieCard movie={recommendation} />
                    </div>
                  )
                })}
              {isLoading && <MovieCardSkeleton isHorizontal={true} />}
            </div>
          </div>
        </div>
      </>
    )
  )
}

export default Detail
