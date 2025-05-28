import React from 'react'
import { useDataContext } from '../contexts/DataContext'

export const Footer = () => {
  const { langData } = useDataContext()
  return (
    <div className='mt-[138px] bg-footer-bg pb-[130px]   max-sm:pb-[60px] max-sm:mt-[60px] '>
      <div className=' mx-auto flex flex-col  gap-16 max-w-[1141px] max-lg:px-10 min-w-[400px]'>
        <h1 className='max-w-[470px] mt-[85px] text-[42px] font-semibold max-md:mt-[30px]'>
          {langData.footerSection.mainText}
        </h1>
        <div className='flex justify-between flex-wrap max-md: gap-10'>
          <div className='font-medium text-xl'>
            <span>👉 </span>
            <a href={langData.footerSection.email} className='text-email underline'>
              {langData.footerSection.email}
            </a>
          </div>
          <div className='flex gap-5'>
            <a href={langData.footerSection.links[0].link} className='font-medium text-blog'>
              {langData.footerSection.links[0].name}
            </a>
            <a href={langData.footerSection.links[1].link} className='font-medium text-github'>
              {langData.footerSection.links[1].name}
            </a>
            <a href={langData.footerSection.links[2].link} className='font-medium text-linkedin'>
              {langData.footerSection.links[2].name}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
