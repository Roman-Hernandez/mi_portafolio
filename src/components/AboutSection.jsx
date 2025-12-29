const AboutSection = ({ about }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 py-16 border-t border-ink/10">
      <div className="md:col-span-4">
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter sticky md:top-24">
          About Me
        </h2>
      </div>
      <div className="md:col-span-8 flex flex-col gap-8">
        <p className="text-lg md:text-xl font-medium leading-relaxed">{about.headline}</p>
        <div className="text-base md:text-lg text-ink/80 leading-relaxed space-y-6">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div>
            <h4 className="font-bold uppercase tracking-[0.2em] text-sm mb-3 border-b border-ink/20 pb-2">
              Expertise
            </h4>
            <ul className="space-y-2">
              {about.expertise.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-[0.2em] text-sm mb-3 border-b border-ink/20 pb-2">
              Connect
            </h4>
            <ul className="space-y-2">
              {about.links.map((link) => (
                <li key={link.label}>
                  <a
                    className="hover:text-accent"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
