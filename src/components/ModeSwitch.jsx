import { useMainContext } from '../contexts/MainContext'
import '../index.css'
import { useDataContext } from '../contexts/DataContext'

export const ModeSwitch = () => {
  const { darkModeHandler, darkMode } = useMainContext()
  const { langData, lang, langHandler } = useDataContext()

  return (
    <div className='sm:flex   sm:justify-end h-[38px] font-inter font-bold text-[15px] '>
      <div className='flex sm:gap-2 items-center max-sm:justify-between'>
        <div className='flex gap-1 '>
          <div
            onClick={darkModeHandler}
            className={darkMode ? 'tdnn' : 'tdnn day'}
          >
            <div className={darkMode ? 'moon' : 'moon sun'}></div>
          </div>
          <div className='text-text-mode'>{darkMode ? 'LIGHT MODE' : 'DARK MODE'}</div>
        </div>
        <div className=' text-text-mode'>|</div>
        <div onClick={langHandler} className='cursor-pointer p-[10px] text-text-mode'>
          {lang == 'tr' ? (
            <p>
              SWİTCH TO <span className='text-text-lang'>ENGLISH</span>
            </p>
          ) : (
            <p>
              <span className='text-text-lang'>TÜRKÇE</span>’YE GEÇ
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
