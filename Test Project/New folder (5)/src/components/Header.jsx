import { useEffect, useState } from 'react'
import { Bell, ChevronDown, Mail, Menu, Moon, SunMedium } from 'lucide-react'

const links = [
  { label: 'Courses', href: '/courses' },
  { label: 'Mentorship', href: '/mentorship' },
  { label: 'Community', href: '/community' },
  { label: 'League', href: '/league' },
  { label: 'Ambassador', href: '/ambassador' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const Header = () => {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
  <header className="px-4 pt-4 sm:px-8">
    <nav className="mx-auto flex h-[62px] max-w-[1230px] items-center gap-6 rounded-full bg-white px-5 shadow-[0_10px_30px_rgba(20,25,35,0.08)] transition-colors dark:bg-slate-900 dark:shadow-black/20 sm:px-8">
      <a href="/" aria-label="Dugsiiye home" className="flex shrink-0 items-center text-[20px] font-bold tracking-[-1px] text-slate-800 dark:text-white">
        <span className="mr-0.5 h-6 w-3 rounded-r-full border-l-[3px] border-emerald-500" />ugsiiye
      </a>

      <div className="hidden flex-1 items-center justify-center gap-7 lg:flex">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="whitespace-nowrap text-[15px] font-semibold text-neutral-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
            {link.label}
          </a>
        ))}
      </div>

      <div className="ml-auto flex items-center gap-5 text-slate-800 dark:text-slate-100">
        <button type="button" aria-label="Toggle theme" onClick={() => setIsDark((value) => !value)}>
          {isDark ? <Moon size={20} strokeWidth={1.8} /> : <SunMedium size={20} strokeWidth={1.8} />}
        </button>
        <button type="button" aria-label="Messages" className="hidden sm:block"><Mail size={20} strokeWidth={1.8} /></button>
        <button type="button" aria-label="Notifications" className="hidden sm:block"><Bell size={20} strokeWidth={1.8} /></button>
        <button type="button" aria-label="Open profile menu" className="flex items-center gap-1.5">
          <span className="relative h-9 w-9 overflow-hidden rounded-full bg-gradient-to-b from-orange-400 via-orange-500 to-amber-800">
            <span className="absolute bottom-0 left-[-4px] h-4 w-12 rotate-[-8deg] rounded-[50%] bg-amber-950/70" />
            <span className="absolute bottom-2 left-2 h-2 w-2 rounded-full bg-yellow-200/80" />
          </span>
          <ChevronDown className="hidden sm:block" size={14} strokeWidth={2} />
        </button>
        <button type="button" aria-label="Open navigation" className="lg:hidden"><Menu size={22} strokeWidth={1.8} /></button>
      </div>
    </nav>
  </header>
  )
}

export default Header