import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-20 py-4 bg-white dark:bg-background-dark sticky top-0 z-50">
      <div className="flex items-center gap-3 text-primary">
        <span className="material-symbols-outlined text-3xl font-bold">shield_person</span>
        <h2 className="text-slate-900 dark:text-slate-100 text-xl font-extrabold leading-tight tracking-tight">CyberShield</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8 items-center">
        <nav className="hidden lg:flex items-center gap-8">
          <Link className="text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors" to="/">Home</Link>
          <Link className="text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors" to="/modules">Modules</Link>
          <Link className="text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors" to="/simulations">Simulations</Link>
          <Link className="text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors" to="/about">About</Link>
        </nav>
        <div className="flex gap-3">
          <button className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <span>Login</span>
          </button>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-primary/20">
            <span>Sign Up</span>
          </button>
        </div>
      </div>
    </header>
  )
}
