// Components
import Navbar from 'components/Navbar'
import Router from '@/Router'

function App() {
  return (
    <div className='relative'>
      <Navbar />
      <div className='relative container mt-16 py-10'>
        <Router />
      </div>
    </div>
  )
}

export default App
