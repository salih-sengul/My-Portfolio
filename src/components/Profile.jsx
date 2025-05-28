import React from 'react'
import { useDataContext } from '../contexts/DataContext'

export const Profile = () => {
  const { langData } = useDataContext()
  return (
    <div className='mt-[42px] border-t-2 border-[#BAB2E7] flex flex-col gap-12'>
      <h2 className='mt-10  font-semibold text-5xl max-md:text-center'>{langData.profileSection.mainTitle}</h2>
      <div className='md:flex gap-14  '>
        <div className='flex flex-col  max-w-[412px] gap-6 max-md:mx-auto'>
          <h3 className='text-3xl font-medium max-md:text-center'>{langData.profileSection.mainTitle}</h3>
          <div >
            {langData.profileSection.profile.map((item,index)=>(
              <div key={index} className='flex '>
              <p className='w-[156px] font-semibold text-profile'>
                {item.title}
              </p>
              <p className='w-[232px] text-profile'>{item.text}</p>
            </div>
            ))}            
          </div>
        </div>
        <div className='max-w-[577px] flex flex-col gap-4 max-md:my-10 max-md:mx-auto'>
          <h3 className='text-3xl font-medium max-md:text-center '>{langData.profileSection.secondTitle}</h3>
          <div className='flex flex-col gap-2'>
            <p>{langData.profileSection.aboutMeText1}</p>
            <p>{langData.profileSection.aboutMeText2}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
