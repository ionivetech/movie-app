// Components
import Navbar from 'components/Navbar'
import Router from '@/Router'

function App() {
  return (
    <div className='relative'>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <Router />
    </div>
  )
}

export default App
