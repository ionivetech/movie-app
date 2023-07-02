// Interfaces
import { IMovieTrailers } from 'interfaces/IMovieTrailers'

// Local interface
interface IProps {
  trailers: IMovieTrailers[]
}

const DetailTrailers = ({ trailers }: IProps) => {
  return (
    <div className='flex space-x-6 overflow-x-auto no-scrollbar scroll-smooth'>
      {trailers.map((trailer, index) => (
        <div
          key={`trailer-${index}`}
          className='lg:w-[500px] md:w-[450px] w-[360px] lg:h-[300px] md:h-[250px] h-[200px] rounded-lg'
        >
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title={trailer.name}
            frameBorder='0'
            allow='encrypted-media;'
            allowFullScreen
            className='lg:w-[500px] md:w-[450px] w-[360px] lg:h-[300px] md:h-[250px] h-[200px] rounded-lg'
          />
        </div>
      ))}
    </div>
  )
}

export default DetailTrailers
