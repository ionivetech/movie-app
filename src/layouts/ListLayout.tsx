import { Outlet } from 'react-router-dom'

function ListLayout() {
  return (
    <div className='relative container md:mt-16 mt-24 py-10'>
      <Outlet />
    </div>
  )
}

export default ListLayout
