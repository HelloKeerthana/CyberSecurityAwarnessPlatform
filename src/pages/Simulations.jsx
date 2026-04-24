import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'

export default function Simulations() {
  const simulations = [
    {
      id: 'phishing-email',
      title: 'Suspicious Email Alert',
      description: 'You receive an urgent email asking to reset your password. What will you do?',
      level: 'Beginner',
      duration: '5 min',
      image: 'https://iso.rice.edu/sites/g/files/bxs3891/files/2022-07/bigstock-Scam-Alert-Hacker-Attack-And--392079872.jpg'
    },
    {
      id: 'fake-website',
      title: 'Fake Login Page',
      description: 'A website looks identical to your bank login page. Should you enter your details?',
      level: 'Beginner',
      duration: '5 min',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3'
    },
    {
      id: 'otp-scam',
      title: 'OTP Scam Call',
      description: 'A caller claims to be from your bank and asks for your OTP. What will you do?',
      level: 'Intermediate',
      duration: '5 min',
      image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505'
    }
  ]

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen">

      {/* Navbar */}
      <Navigation />

      {/* Main Content */}
      <main className="px-6 md:px-20 py-10">

        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Real-Life Cybersecurity Simulations
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-3">
            Think like a user. Decide what action you would take in each situation.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {simulations.map((sim) => (
            <div key={sim.id} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-lg transition">

              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img src={sim.image} alt={sim.title} className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">{sim.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  {sim.description}
                </p>

                <div className="flex justify-between text-xs text-slate-400 mb-4">
                  <span>{sim.level}</span>
                  <span>{sim.duration}</span>
                </div>

                <Link
                  to={`/simulation/${sim.id}`}
                  className="w-full block text-center bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/90 transition"
                >
                  What will you do?
                </Link>
              </div>

            </div>
          ))}

        </div>

      </main>
    </div>
  )
}