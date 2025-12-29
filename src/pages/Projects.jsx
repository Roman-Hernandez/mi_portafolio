import PageIntro from '../components/PageIntro'
import ProjectsGrid from '../components/ProjectsGrid'
import useSiteContent from '../hooks/useSiteContent'

const Projects = () => {
  const { projects } = useSiteContent()

  return (
    <div className='lg:w-8/12 m-auto'>
      <PageIntro
        eyebrow="Work"
        title="Build fast, ship reliable."
        description="Selected engagements across e-commerce, fintech, data platforms, and dev tooling. Each shipped with observability, testing, and performance budgets baked in."
      />
      <ProjectsGrid projects={projects} />
    </div>
  )
}

export default Projects
