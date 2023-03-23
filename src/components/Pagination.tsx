// Components
import ReactPaginate from 'react-paginate'
// Icons
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

// Props interface
interface IProps {
  page: number
  totalPages: number
  handleChangePage(page: number): unknown
}

function Pagination(props: IProps) {
  return (
    <ReactPaginate
      onPageChange={({ selected }: { selected: number }) => props.handleChangePage(selected)}
      initialPage={props.page - 1}
      pageRangeDisplayed={2}
      pageCount={props.totalPages}
      nextLabel={<ChevronRightIcon className='w-5 h-5' />}
      previousLabel={<ChevronLeftIcon className='w-5 h-5' />}
      containerClassName='flex space-x-3'
      pageClassName='min-w-[35px] h-[35px] hidden md:flex text-slate-300 font-semibold text-sm bg-slate-800 rounded-lg'
      pageLinkClassName='w-full h-full px-4 pt-[2px] flex items-center justify-center'
      activeClassName='!bg-blue-600 text-white'
      previousClassName='min-w-[35px] h-[35px] flex text-slate-300 font-semibold text-lg bg-slate-800 rounded-lg'
      previousLinkClassName='w-full h-full px-2 flex items-center justify-center'
      nextClassName='min-w-[35px] h-[35px] flex text-slate-300 font-semibold text-lg bg-slate-800 rounded-lg'
      nextLinkClassName='w-full h-full px-2 flex items-center justify-center'
      breakClassName='min-w-[35px] h-[35px] flex text-slate-300 font-semibold text-lg bg-slate-800 rounded-lg'
      breakLinkClassName='w-full h-full px-2 flex items-center justify-center pointer-events-none'
      disabledClassName='!bg-slate-800 opacity-50'
      disabledLinkClassName='cursor-not-allowed'
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination
