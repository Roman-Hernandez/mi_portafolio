import FloatingMenu from './FloatingMenu'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = ({ site }) => {
  return (
    <div className="bg-primary text-ink min-h-screen antialiased overflow-x-hidden">
      <FloatingMenu navigation={site.navigation} />
      <div className="relative flex min-h-screen w-full flex-col">
        <Header branding={site.branding} contact={site.contact} navigation={site.navigation} />
        <main className="flex flex-col grow px-6 md:px-12 lg:px-20 pb-32">
          <Outlet context={{ site }} />
        </main>
        <Footer branding={site.branding} contact={site.contact} />
      </div>
    </div>
  )
}

export default Layout
