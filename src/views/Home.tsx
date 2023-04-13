// Components
import Trending from '@/components/HomeSection/Trending'
import Popular from '@/components/HomeSection/Popular'
import UpcomingMovie from '@/components/HomeSection/UpcomingMovie'

const Home = () => {
  return (
    <>
      <div className='space-y-16'>
        <Trending />
        <Popular />
        <UpcomingMovie />
      </div>
    </>
  )
}

export default Home
