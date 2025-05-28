import { useDataContext } from '../contexts/DataContext'

export const Header = () => {
  const { langData } = useDataContext()
  return (
    <nav className='flex  justify-between items-center mt-[26px] max-sm:mt-[52px]'>
      <div className=' rounded-full w-[63px] h-[63px] flex items-center justify-center bg-logo-background'>
        <p className='rotate-30 font-semibold text-2xl text-logo'>A</p>
      </div>
      <nav className='flex gap-[59px]  h-[52px] font-medium text-text max-sm:hidden'>
        <div className='flex gap-[82px]'>
          <a
            rel='stylesheet'
            href='https://example.com'
            className=' flex items-center'
          >
            Skills
          </a>
          <a
            rel='stylesheet'
            href='https://example.com'
            className=' flex items-center'
          >
            Projects
          </a>
        </div>
        <a
          rel='stylesheet'
          href={langData.headerSection.hireMe.link}
          className='border-2 rounded-md flex items-center px-8 bg-white text-indigo-800 border-indigo-800'
        >
          {langData.headerSection.hireMe.alt_text}
        </a>
      </nav>
    </nav>
  )
}
