const IconButton = ({ title, children, active = false }) => {
  return (
    <button
      type="button"
      title={title}
      className={[
        'relative grid h-10 w-12 place-items-center rounded-xl transition',
        active ? 'text-blue-400' : 'text-[#b0b3b8]',
        'hover:bg-white/10',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70',
      ].join(' ')}
    >
      {children}
      {active ? (
        <span className="absolute -bottom-2 left-2 right-2 h-[3px] rounded-full bg-blue-500" />
      ) : null}
    </button>
  )
}

const RoundButton = ({ title, children, badge }) => {
  return (
    <button
      type="button"
      title={title}
      className="relative grid h-10 w-10 place-items-center rounded-full bg-white/10 text-[#e4e6eb] transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
    >
      {children}
      {badge ? (
        <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-red-600 px-1 text-xs font-semibold text-white">
          {badge}
        </span>
      ) : null}
    </button>
  )
}

const FacebookMark = () => (
  <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-600 font-black text-white">
    f
  </div>
)

const Svg = ({ children }) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
    {children}
  </svg>
)

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#242526]/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-3 px-3">
        {/* Left */}
        <div className="flex items-center gap-2">
          <FacebookMark />
          <div className="hidden items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm text-[#b0b3b8] md:flex">
            <Svg>
              <path d="M10 2a8 8 0 105.293 14.293l3.707 3.707 1.414-1.414-3.707-3.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
            </Svg>
            <span className="truncate">Search Facebook</span>
          </div>
        </div>

        {/* Center */}
        <nav className="mx-auto hidden items-center gap-2 lg:flex">
          <IconButton title="Home" active>
            <Svg>
              <path d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3l9-8z" />
            </Svg>
          </IconButton>
          <IconButton title="Videos">
            <Svg>
              <path d="M4 6h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm6 4l5 3-5 3v-6z" />
            </Svg>
          </IconButton>
          <IconButton title="Marketplace">
            <Svg>
              <path d="M7 4h10l2 4H5l2-4zm-2 6h14v10a2 2 0 01-2 2H7a2 2 0 01-2-2V10zm4 2v2h6v-2H9z" />
            </Svg>
          </IconButton>
          <IconButton title="Groups">
            <Svg>
              <path d="M7 12a3 3 0 113-3 3 3 0 01-3 3zm10 0a3 3 0 10-3-3 3 3 0 003 3zM2 20a5 5 0 0110 0H2zm10.5 0a6.5 6.5 0 0113 0h-13z" />
            </Svg>
          </IconButton>
        </nav>

        {/* Right */}
        <div className="ml-auto flex items-center gap-2">
          <RoundButton title="Menu">
            <Svg>
              <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
            </Svg>
          </RoundButton>
          <RoundButton title="Messenger" badge="2">
            <Svg>
              <path d="M12 3C6.477 3 2 6.91 2 11.727c0 2.74 1.48 5.18 3.79 6.79V22l3.46-1.92c.88.24 1.82.37 2.75.37 5.523 0 10-3.91 10-8.727C22 6.91 17.523 3 12 3zm-1 12l-4 4 2-5-3-3 5 2 5-4-2 5 3 3-6-2z" />
            </Svg>
          </RoundButton>
          <RoundButton title="Notifications" badge="10">
            <Svg>
              <path d="M12 22a2.5 2.5 0 002.45-2h-4.9A2.5 2.5 0 0012 22zm7-6V11a7 7 0 00-5-6.7V3a2 2 0 10-4 0v1.3A7 7 0 005 11v5l-2 2v1h20v-1l-2-2z" />
            </Svg>
          </RoundButton>
          <button
            type="button"
            title="Profile"
            className="ml-1 flex items-center gap-2 rounded-full bg-white/10 p-1 pr-3 text-sm font-semibold text-[#e4e6eb] transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500" />
            <span className="hidden sm:inline">HP</span>
          </button>
        </div>
      </div>
    </header>
  )
}

