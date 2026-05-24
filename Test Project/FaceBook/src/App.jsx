import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <div className="min-h-full bg-[#18191a]">
      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <main className="mx-auto max-w-[1400px] px-3 pt-16">
        <div className="rounded-2xl border border-white/10 bg-[#242526] p-6 text-[#e4e6eb]">
          Navbar is ready.
        </div>
      </main>
    </div>
  )
}

export default App
