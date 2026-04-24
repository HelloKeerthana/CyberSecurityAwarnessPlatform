import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Quiz() {
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const quizData = {
    title: "Phishing Fundamentals",
    subtitle: "Module Assessment",
    currentQuestion: 4,
    totalQuestions: 10,
    timeRemaining: "12:45",
    question: "You receive an email from \"PayPal\" stating your account is locked and you must click a link to verify your identity. Which of the following is the most likely red flag?",
    options: [
      "The email uses the official PayPal logo",
      "The email address is \"support@pay-pal-security.com\"",
      "The email contains a footer with \"Unsubscribe\" options",
      "The email addresses you by your full name"
    ],
    tip: "Always hover over links in emails to see the actual destination URL before clicking."
  }

  const progress = (quizData.currentQuestion / quizData.totalQuestions) * 100

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 bg-white dark:bg-background-dark px-6 md:px-10 py-3 sticky top-0 z-50">
          <div className="flex items-center gap-4 text-primary">
            <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
              <span className="material-symbols-outlined text-primary text-2xl">shield</span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">CyberShield</h2>
          </div>
          <div className="flex flex-1 justify-end gap-4 items-center">
            <nav className="hidden md:flex gap-6 mr-6">
              <Link className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary" to="/">Dashboard</Link>
              <Link className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary" to="/simulations">Learning Path</Link>
            </nav>
            <button className="flex items-center justify-center rounded-full size-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20"
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBr5uKsQrwI9x9tWuNYmToVXy9V2zNdLHtTg_t6Sti_BVJDqYcdQN_m2MuWgDhsWBnBu4W-RTF_xJQplBf0Q4iQUL0KtQ1VgQ3mnNP2BpNvTwjvwP1l7IsXVcnvJftWM7zwgrtIdJPshoi2YgJWhxQJrqyy_-oMGfMIWvXQ6BKG1bIzJmT_2pCxvojoXfV7MzIa9VM4t6qd8mnexe0p-0tPtRkASr_PsNbB642OkVBc-T8olZfoy4dl733Byy3XwCX6Yxe1LP9TtJs")'}}
            ></div>
          </div>
        </header>

        <main className="flex flex-1 justify-center py-8 px-4 md:px-10">
          <div className="layout-content-container flex flex-col max-w-[800px] flex-1">
            {/* Quiz Progress & Info Card */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-primary/5 p-6 mb-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primary text-sm font-semibold uppercase tracking-wider">{quizData.title}</p>
                    <h1 className="text-slate-900 dark:text-slate-100 text-lg font-bold">{quizData.subtitle}</h1>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase">Time Remaining</p>
                    <div className="flex gap-1 justify-end">
                      <span className="text-slate-900 dark:text-slate-100 font-bold tabular-nums">{quizData.timeRemaining}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold">
                      Question {quizData.currentQuestion} <span className="text-slate-400 font-normal">of {quizData.totalQuestions}</span>
                    </p>
                    <p className="text-slate-400 text-xs">{Math.round(progress)}% Complete</p>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-primary transition-all"
                      style={{width: `${progress}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Question Section */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-primary/5 p-6 md:p-10 mb-6">
              <div className="flex items-start gap-4 mb-8">
                <div className="size-10 flex-shrink-0 flex items-center justify-center bg-primary/10 rounded-lg text-primary">
                  <span className="material-symbols-outlined">help</span>
                </div>
                <h3 className="text-slate-900 dark:text-slate-100 text-xl md:text-2xl font-bold leading-tight">
                  {quizData.question}
                </h3>
              </div>

              <form className="flex flex-col gap-4">
                {quizData.options.map((option, index) => (
                  <label 
                    key={index}
                    className={`group flex items-center gap-4 rounded-xl border-2 p-4 cursor-pointer transition-all ${
                      selectedAnswer === index
                        ? 'border-primary bg-primary/5'
                        : 'border-slate-100 dark:border-slate-800 hover:border-primary/50 hover:bg-primary/5'
                    }`}
                  >
                    <input
                      type="radio"
                      name="quiz-answer"
                      checked={selectedAnswer === index}
                      onChange={() => setSelectedAnswer(index)}
                      className="h-5 w-5 border-2 border-slate-300 dark:border-slate-600 bg-transparent text-primary checked:border-primary checked:bg-primary focus:ring-primary focus:ring-offset-0 cursor-pointer"
                    />
                    <div className="flex grow flex-col">
                      <p className="text-slate-900 dark:text-slate-100 text-base font-medium">
                        {option}
                      </p>
                    </div>
                  </label>
                ))}
              </form>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-4">
              <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 font-bold transition-colors hover:bg-slate-50 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined">arrow_back</span>
                Previous
              </button>
              <div className="flex gap-3">
                <button className="px-6 py-3 rounded-lg text-slate-500 dark:text-slate-400 font-semibold hover:text-primary transition-colors">
                  Skip
                </button>
                <button 
                  disabled={selectedAnswer === null}
                  className={`flex items-center gap-2 px-8 py-3 rounded-lg font-bold transition-all ${
                    selectedAnswer === null
                      ? 'bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed'
                      : 'bg-primary text-white hover:opacity-90 shadow-lg shadow-primary/20'
                  }`}
                >
                  Next Question
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Help Tip */}
            <div className="mt-12 p-4 rounded-lg bg-primary/5 border border-primary/10 flex gap-4 items-start">
              <span className="material-symbols-outlined text-primary">lightbulb</span>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100">Pro Tip</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{quizData.tip}</p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer Info */}
        <footer className="py-8 px-10 text-center">
          <p className="text-slate-400 text-xs">© 2024 CyberShield Academy. Professional Cybersecurity Training.</p>
        </footer>
      </div>
    </div>
  )
}
