import { useState } from 'react'
// Interfaces
import type { ITab } from '@/interfaces/ITab'
// Components
import Navbar from 'components/Navbar'
import Router from '@/Router'

function App() {
  const [tabActive, setTabActive] = useState<string>('movie')

  const tabs: ITab[] = [
    { id: 'movie', label: 'Movies' },
    { id: 'tv', label: 'TV Show' },
  ]

  return (
    <div className='relative'>
      <Navbar />
      <div className='container mt-16 py-10'>
        {/* Tab */}
        <div className='flex space-x-3'>
          {tabs.map((tab, index) => {
            return (
              <div
                key={tab.id}
                className={`px-5 py-2 rounded-full bg-slate-600 text-sm text-slate-100 tracking-wider transition ease-in-out duration-200
                  ${tabActive === tab.id ? 'bg-blue-500 cursor-default' : 'cursor-pointer'}
                `}
                tabIndex={index}
                role='button'
                onClick={() => setTabActive(tab.id)}
              >
                {tab.label}
              </div>
            )
          })}
        </div>

        <Router />
      </div>
    </div>
  )
}

export default App
