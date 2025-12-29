const PageIntro = ({ eyebrow, title, description }) => {
  return (
    <div className="flex flex-col gap-3 mb-10">
      <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-ink/70">
        {eyebrow}
      </span>
      <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">{title}</h1>
      {description ? (
        <p className="text-base md:text-lg text-ink/80 max-w-3xl leading-relaxed">{description}</p>
      ) : null}
    </div>
  )
}

export default PageIntro
