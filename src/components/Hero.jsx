import { Link } from 'react-router-dom'

const Hero = ({ hero }) => {
  return (
    <section id="hero" className="w-full py-12 md:py-16">
      <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
        <div className="flex-1 flex flex-col gap-8 text-left max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tighter">
            {hero.headline}
          </h1>
          <p className="text-base md:text-lg font-normal leading-relaxed text-ink/80 max-w-xl">
            {hero.subhead}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              className="flex items-center justify-center rounded-lg h-11 px-7 bg-ink text-primary text-base font-bold hover:bg-opacity-90 transition-all"
              to={hero.primaryCta.href}
            >
              {hero.primaryCta.label}
            </Link>
            <a
              className="flex items-center justify-center rounded-lg h-11 px-7 bg-surface border border-ink/10 text-ink text-base font-bold hover:bg-gray-50 transition-all"
              href={hero.secondaryCta.href}
              target="_blank"
              rel="noreferrer"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
        <div className="w-full lg:w-[480px] shrink-0">
          <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border-2 border-ink bg-accent/20 group">
            <div className="absolute inset-0 bg-accent mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity duration-500 z-10" />
            <div
              className="w-full h-full bg-center bg-cover bg-no-repeat grayscale group-hover:grayscale-0 transition-all duration-500"
              style={{ backgroundImage: `url("${hero.portrait.url}")` }}
              role="img"
              aria-label={hero.portrait.alt}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
