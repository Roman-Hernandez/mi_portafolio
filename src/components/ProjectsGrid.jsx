import ProjectCard from './ProjectCard'

const ProjectsGrid = ({ projects }) => {
  return (
    <section className="flex flex-col gap-8 mb-20">
      <div className="flex items-end justify-between border-b border-ink pb-3">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight">Selected Projects</h2>
        {projects.period ? (
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-1 text-ink/70">
            ({projects.period})
          </span>
        ) : null}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {projects.items.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsGrid
