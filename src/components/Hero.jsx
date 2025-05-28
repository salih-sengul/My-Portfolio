import React from 'react'
import { useDataContext } from '../contexts/DataContext'
import { useMainContext } from '../contexts/MainContext'
import DynamicSvg from './dSvg'
export const Hero = () => {
  const { langData } = useDataContext()
  const { darkMode } = useMainContext()

  const profileImage = new URL(
    `../assets/imgs/${langData.heroSection.profileImage}`,
    import.meta.url
  ).href

  const colorHandler = color => {
    if (!color) return

    return new URL(`../assets/imgs/${color}`, import.meta.url).href
  }

  return (
    <div className='mt-[88px] flex justify-between max-lg:flex-wrap max-sm:mt-[30px]'>
      <div className='flex flex-col gap-10 max-w-[596px] max-sm:gap-5'>
        <div className='flex items-center '>
          <hr className='w-[102px]   ' />
          <h3 className='px-[5px] font-medium'>{langData.heroSection.name}</h3>
        </div>
        <h1 className='font-bold text-7xl max-sm:text-5xl'>{langData.heroSection.intro}</h1>
        <p>{langData.heroSection.ctaHTML}</p>
        <div className='flex h-[52px] gap-3 max-sm:flex-wrap'>
          <a
            rel='stylesheet'
            href={langData.headerSection.hireMe.link}
            className='max-sm:p-2 border-2 rounded-md flex items-center px-8 font-medium text-button-hero-hire-text bg-button-hero-bg-hire border-button-hero-bg-hire'
          >
            {langData.headerSection.hireMe.alt_text}
          </a>
          {langData.heroSection.socials.map((item, index) => (
            <div
              key={index}
              className='max-sm:p-2 flex items-center border-2 rounded-md gap-3 px-3 font-medium text-button-hero-others-text border-button-hero-others-text bg-button-hero-bg-others'
            >
              <div className='text-[26px]'>
                <DynamicSvg imageName={item.logo} className='fill-current' />
              </div>
              <a href=''>{item.alt_text}</a>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-[28px] mb-[25px] lg:max-h-[375px] max-lg:order-first max-md:w-full'>
          <img src={profileImage} alt=''  className='w-full'/>
      </div>
      
    </div>
  )
}
