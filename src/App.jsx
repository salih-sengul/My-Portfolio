import { ModeSwitch } from './components/ModeSwitch'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Profile } from './components/Profile'
import { Footer } from './components/Footer'
import { useMainContext } from './contexts/MainContext'
import { useEffect } from 'react'
import { useDataContext } from './contexts/DataContext'

function App () {
  const { darkMode } = useMainContext()

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode')
    } else {
      document.documentElement.classList.remove('dark-mode')
    }

      
  }, [])

  return (
    <>
      <div className='max-w-[1141px] mx-auto flex flex-col justify-center mt-6 max-xl:px-10 min-w-[400px]'>
        <ModeSwitch />
        <Header />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </div>
      <Footer />
    </>
  )
}

export default App
