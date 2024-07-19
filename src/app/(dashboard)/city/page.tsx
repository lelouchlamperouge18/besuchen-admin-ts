// React Imports
import type { ReactElement } from 'react'

// Next Imports
import dynamic from 'next/dynamic'

// Component Imports
import VisitOurCities from '@views/city'

const CitiesTab = dynamic(() => import('@views/city/cities'))
const CreateACityTab = dynamic(() => import('@views/city/create-a-city'))

// Vars
const tabContentList = (): { [key: string]: ReactElement } => ({
  cities: <CitiesTab />,
  createacity: <CreateACityTab />
})

const City = () => {
  return (
    <div className='City'>
      <VisitOurCities tabContentList={tabContentList()} />
    </div>
  )
}

export default City
