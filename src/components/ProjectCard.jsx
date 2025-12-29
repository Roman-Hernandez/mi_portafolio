const ProjectCard = ({ project }) => {
  const isCta = project.emphasis === 'cta'

  if (isCta) {
    return (
      <a
        className="group flex flex-col justify-center items-center p-8 text-center relative overflow-hidden rounded-xl bg-accent text-ink shadow-sm hover:shadow-md transition-all"
        href={project.cta}
        target="_blank"
        rel="noreferrer"
      >
        <h3 className="text-3xl font-black mb-2">{project.title}</h3>
        <p className="font-medium mb-6">{project.stack}</p>
        <span className="material-symbols-outlined text-4xl group-hover:translate-x-2 transition-transform">
          arrow_forward
        </span>
      </a>
    )
  }

  return (
    <div className="group relative overflow-hidden rounded-xl border border-ink/10 shadow-sm hover:shadow-md transition-all bg-surface">
      <div
        className={[
          'w-full bg-cover bg-center transition-transform duration-700',
          project.emphasis === 'tall' ? 'h-full min-h-[320px]' : 'aspect-video',
          project.emphasis === 'square' ? 'aspect-square' : ''
        ].join(' ')}
        style={{ backgroundImage: `url("${project.image}")` }}
        role="img"
        aria-label={project.title}
      />
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-between text-white">
        <div>
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="text-sm opacity-90">{project.stack}</p>
        </div>
        <span className="material-symbols-outlined bg-white text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          code
        </span>
      </div>
    </div>
  )
}

export default ProjectCard
