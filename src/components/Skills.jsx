import React from 'react'
import { useMainContext } from '../contexts/MainContext'
import { useDataContext } from '../contexts/DataContext'

export const Skills = () => {
  
  const {langData} = useDataContext()


  return (
    <div className='mt-[124px] flex flex-col gap-[34px]  max-md:text-center'>
      <h2 className=' font-semibold text-5xl max-md:text-center'>{langData.skillsSection.title}</h2>
      <div className='md:flex justify-between flex-wrap'>
        {langData.skillsSection.skills.map((item,index)=>(
        <div key={index} className='md:max-w-[300px] flex flex-col gap-7 max-md:my-5'> 
          <h3 className='text-3xl font-medium'>{item.name}</h3>
          <p className='text-xs'>{item.description}</p>
        </div>
      ))}
      </div>      
    </div>
  )
}
