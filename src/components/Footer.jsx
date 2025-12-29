const Footer = ({ branding, contact }) => {
  return (
    <footer
      id="contact"
      className="bg-night text-[#ece5da] px-6 md:px-12 lg:px-20 py-16"
    >
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-60">Have a project?</p>
          <a
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter hover:text-accent transition-colors leading-tight"
            href={`mailto:${contact.email}`}
          >
            {contact.cta}
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pt-12 border-t border-white/10">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-lg">{branding.logoText}</span>
            <span className="opacity-60 text-sm">© 2024 All Rights Reserved.</span>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">schedule</span>
              <span className="text-sm">Local time: {contact.localTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">location_on</span>
              <span className="text-sm">{branding.location}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
