// Components
import Navbar from 'components/Navbar'
import Router from '@/Router'

function App() {
  return (
    <div className='relative'>
      <Navbar />
      <div className='relative container md:mt-16 mt-24 py-10'>
        <Router />
      </div>
    </div>
  )
}

export default App
