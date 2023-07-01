import { Outlet } from 'react-router-dom'

function DetailLayout() {
  return (
    <div className='md:mt-16 mt-24 pb-10'>
      <Outlet />
    </div>
  )
}

export default DetailLayout
