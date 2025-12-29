import PageIntro from '../components/PageIntro'
import useSiteContent from '../hooks/useSiteContent'

const Contact = () => {
  const { contact, branding } = useSiteContent()

  return (
    <div className='lg:w-8/12 m-auto'>
      
      <PageIntro
        eyebrow="Contact"
        title="Let's build something together."
        description={contact.note}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="p-8 rounded-xl border border-ink/10 bg-surface shadow-sm flex flex-col gap-4">
          <h3 className="text-2xl font-black">Availability</h3>
          <p className="text-base md:text-lg text-ink/80">{contact.availability}</p>
          <div className="flex items-center gap-3 text-ink/70">
            <span className="material-symbols-outlined text-lg">schedule</span>
            <span>{contact.localTime} local time</span>
          </div>
          <div className="flex items-center gap-3 text-ink/70">
            <span className="material-symbols-outlined text-lg">location_on</span>
            <span>{contact.location}</span>
          </div>
        </div>
        <div className="p-8 rounded-xl border border-ink/10 bg-accent/20 shadow-sm flex flex-col gap-6">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-ink/70">
              Email
            </span>
            <a
              className="block text-3xl font-black text-ink hover:text-accent transition-colors"
              href={`mailto:${contact.email}`}
            >
              {contact.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-lg">mark_email_read</span>
            <span className="text-[#161513cc]">
              Drop a note with context and target outcomes, and I will reply within one business day.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-lg">verified</span>
            <span className="text-ink/80">
              References and case studies available upon request.
            </span>
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-ink/10 bg-surface/80 shadow-sm p-8 flex flex-col gap-4">
        <h3 className="text-2xl font-black">Why teams hire {branding.logoText}</h3>
        <ul className="space-y-3 text-ink/80">
          <li className="flex gap-3">
            <span className="material-symbols-outlined text-lg text-accent">rocket_launch</span>
            <span>Rapid prototyping with guardrails for scale.</span>
          </li>
          <li className="flex gap-3">
            <span className="material-symbols-outlined text-lg text-accent">security</span>
            <span>Secure-by-default build pipelines and runtime checks.</span>
          </li>
          <li className="flex gap-3">
            <span className="material-symbols-outlined text-lg text-accent">query_stats</span>
            <span>Instrumentation that keeps reliability and performance measurable.</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
