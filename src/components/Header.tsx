import { Menu, X, Phone, ArrowUpRight } from 'lucide-react'
import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import logo from '../assets/twin-logo.png'

const links = [
  ['/', 'Home'],
  ['/products', 'Products'],
  ['/about', 'About'],
  ['/private-label', 'Private Label'],
  ['/contact', 'Contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-white/60 shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-[76px] max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-12">
        <Link to="/" className="relative z-10 flex items-center" aria-label="Twin Paper Products home">
          <span className="rounded-2xl bg-ink px-3 py-2 shadow-lg shadow-ink/10">
            <img src={logo} alt="Twin Paper Products" className="h-9 w-auto object-contain sm:h-10" />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/80 bg-white/[0.07]0 p-1.5 shadow-sm backdrop-blur-xl lg:flex">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-ink text-white shadow' : 'text-slate-600 hover:bg-white hover:text-ink'}`}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:+916379771042" className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white/80 text-ink transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md" aria-label="Call Twin Paper Products">
            <Phone size={18} />
          </a>
          <Link to="/contact" className="group flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-ink/20 transition hover:-translate-y-0.5 hover:bg-navy">
            Get a Quote <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-sm lg:hidden" aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="mx-4 mb-4 rounded-[28px] border border-white/70 bg-white/95 p-3 shadow-soft backdrop-blur-xl lg:hidden animate-fade-up">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => `block rounded-2xl px-4 py-3 text-sm font-semibold ${isActive ? 'bg-ink text-white' : 'text-slate-700 hover:bg-slate-50'}`}>
              {label}
            </NavLink>
          ))}
          <a href="tel:+916379771042" className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-sky/20 px-4 py-3 text-sm font-semibold text-navy">
            <Phone size={17} /> +91 63797 71042
          </a>
        </div>
      )}
    </header>
  )
}
