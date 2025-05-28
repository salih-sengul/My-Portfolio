import React from 'react'
import { useDataContext } from '../contexts/DataContext'

export const Project = ({item}) => {
  const {langData} = useDataContext()
  const projectImage = new URL(`../assets/imgs/${item.preview}`, import.meta.url).href

  return (
    <div className='w-[300px] flex flex-col gap-4 max-md:w-full max-md:gap-2 max-md:border-2 max-md:border-text-lang max-md:p-3 rounded'>
      <img src={projectImage} alt="" />
      <h3 className='text-3xl font-medium'>{item.name}</h3>
      <p className='text-sm'>{item.description}</p>
      <div className='flex gap-[6px] '>
        {item.libraries.map((item,index)=>(
          <div key={index} className='border-1 rounded-md px-[18px] text-sm font-medium bg-button-hero-bg-others border-button-porject text-button-porject py-[6px]' >{item}</div>
        ))}
      </div>
      <div className='flex justify-between'>
        {item.links.map((item,index)=>(
          <a key={index} href={item.link} className='text-base font-medium underline text-button-hero-bg-hire'>{item.name}</a>
        ))}
      </div>
    </div>
  )
}
