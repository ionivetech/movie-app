// Components
import ReactPaginate from 'react-paginate'
// Icons
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

// Props interface
interface IProps {
  page: number
  totalPages: number
  handleChangePage(page: number): unknown
}

const Pagination = (props: IProps) => {
  return (
    <ReactPaginate
      onPageChange={({ selected }: { selected: number }) => props.handleChangePage(selected)}
      initialPage={props.page - 1}
      pageRangeDisplayed={2}
      pageCount={props.totalPages}
      nextLabel={<IconChevronRight className='w-5 h-5' />}
      previousLabel={<IconChevronLeft className='w-5 h-5' />}
      containerClassName='flex space-x-3'
      pageClassName='min-w-[35px] h-[35px] hidden md:flex text-slate-500 dark:text-slate-300 font-medium text-sm bg-slate-200 dark:bg-slate-700 rounded-lg'
      pageLinkClassName='w-full h-full px-4 pt-[2px] flex items-center justify-center'
      activeClassName='!bg-blue-600 !text-white'
      previousClassName='min-w-[35px] h-[35px] flex text-slate-500 dark:text-slate-300 font-semibold text-lg bg-slate-200 dark:bg-slate-700 rounded-lg'
      previousLinkClassName='w-full h-full px-2 flex items-center justify-center'
      nextClassName='min-w-[35px] h-[35px] flex text-slate-500 dark:text-slate-300 font-semibold text-lg bg-slate-200 dark:bg-slate-700 rounded-lg'
      nextLinkClassName='w-full h-full px-2 flex items-center justify-center'
      breakClassName='min-w-[35px] h-[35px] hidden md:flex text-slate-500 dark:text-slate-300 font-semibold text-lg bg-background-light dark:bg-slate-900 rounded-lg'
      breakLinkClassName='w-full h-full px-2 flex items-center justify-center pointer-events-none'
      disabledClassName='!bg-slate-100 dark:!bg-slate-800 opacity-50'
      disabledLinkClassName='cursor-not-allowed'
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination
