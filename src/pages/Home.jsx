import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import ProjectsGrid from '../components/ProjectsGrid'
import AboutSection from '../components/AboutSection'
import useSiteContent from '../hooks/useSiteContent'

const Home = () => {
  const { hero, marquee, projects, about } = useSiteContent()

  return (
    <div className='lg:w-8/12 m-auto'>
      <Hero hero={hero} />
      <Marquee items={marquee} />
      <ProjectsGrid projects={projects} />
      <AboutSection about={about} />
    </div>
  )
}

export default Home
