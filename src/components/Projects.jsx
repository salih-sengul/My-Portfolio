
import { useDataContext } from '../contexts/DataContext'
import { Project } from './Project'

export const Projects = () => {
  const {langData} = useDataContext()
  console.log(langData.projectsSection)
  return (
    <div className='mt-[42px] border-t-2 flex flex-col  gap-9 border-[#BAB2E7] max-md:items-center'>
      <h2 className='mt-10 font-semibold text-5xl'>{langData.projectsSection.title}</h2>
      <div className='flex justify-between flex-wrap max-md:justify-center max-md: gap-15'>
        {langData.projectsSection.projects.map((item,index)=>(
          <Project key={index} item={item}/>
        ))}
      </div>
    </div>
  )
}
