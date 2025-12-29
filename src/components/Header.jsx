import { NavLink } from 'react-router-dom'

const Header = ({ branding, contact, navigation }) => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap px-8 py-6 md:px-12 lg:px-20">
      <div className="flex items-center gap-2 text-ink ">
        <span className="material-symbols-outlined text-3xl">terminal</span>
        <h2 className="text-xl font-black tracking-tighter uppercase">{branding.logoText}</h2>
      </div>
      <nav className="hidden md:flex flex-[1.3]  justify-end items-center gap-6 text-sm font-semibold tracking-tight">
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              [
                'px-4 py-2 rounded-full transition-colors border border-transparent',
                isActive
                  ? 'bg-ink text-white'
                  : 'text-ink/80 hover:text-ink hover:border-ink'
              ].join(' ')
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="hidden md:flex flex-1 justify-end gap-8 ">
        <a
          className="flex items-center justify-center rounded-full h-10 px-6 border-2 border-ink text-ink text-sm font-bold hover:bg-ink hover:text-primary transition-colors"
          href={`mailto:${contact.email}`}
        >
          {branding.hireLabel}
        </a>
      </div>
    </header>
  )
}

export default Header
