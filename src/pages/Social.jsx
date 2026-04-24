import Navigation from '../components/Navigation'

export default function Social() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen">

      {/* Navbar */}
      <Navigation />

      {/* Main */}
      <main className="px-6 md:px-20 py-10 max-w-5xl mx-auto space-y-10">

        <h1 className="text-4xl font-black text-center">
          Social Engineering Module
        </h1>

        {/* 1 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🧠 1. What is Social Engineering?</h2>
          <p>
            Social engineering is an attack where attackers manipulate people into revealing confidential information or performing actions.
          </p>
          <p className="text-primary font-semibold">
            👉 The target is you, not your device.
          </p>
        </div>

        {/* 2 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🎯 2. Why It Works</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Trust</li>
            <li>Fear</li>
            <li>Urgency</li>
            <li>Curiosity</li>
            <li>Lack of awareness</li>
          </ul>
        </div>

        {/* 3 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🔄 3. How Attacks Work</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Research the target</li>
            <li>Pretend to be trusted person</li>
            <li>Manipulate emotions</li>
            <li>Victim performs action</li>
          </ul>
        </div>

        {/* 4 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🎭 4. Types of Social Engineering</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Phishing</li>
            <li>Pretexting</li>
            <li>Baiting</li>
            <li>Tailgating</li>
            <li>Quid Pro Quo</li>
          </ul>
        </div>

        {/* 5 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">⚠️ 5. Warning Signs</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Urgent requests</li>
            <li>Requests for sensitive data</li>
            <li>Unknown people asking unusual things</li>
            <li>Too good to be true offers</li>
            <li>Requests to bypass rules</li>
          </ul>
        </div>

        {/* 6 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🔍 6. Psychological Tricks</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Authority → “I’m from IT”</li>
            <li>Fear → “Account will be locked”</li>
            <li>Urgency → “Act now!”</li>
            <li>Greed → “You won a prize”</li>
            <li>Helpfulness → Exploiting kindness</li>
          </ul>
        </div>

        {/* 7 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🛡️ 7. Protection Tips</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Verify identity before sharing info</li>
            <li>Never share passwords or OTPs</li>
            <li>Follow official procedures</li>
            <li>Be cautious with links</li>
            <li>Think before acting</li>
          </ul>
        </div>

        {/* 8 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🚨 8. If You Suspect an Attack</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Stop communication</li>
            <li>Do not share info</li>
            <li>Report immediately</li>
            <li>Change passwords</li>
          </ul>
        </div>

        {/* SCENARIOS */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">🎭 Real-Life Scenarios</h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border">
              <p className="font-bold">Fake IT Call</p>
              <p className="text-sm">“Give password to fix issue”</p>
              <p className="text-green-600 mt-2 font-semibold">✅ Never share passwords</p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl border">
              <p className="font-bold">Manager Email</p>
              <p className="text-sm">Urgent request for confidential file</p>
              <p className="text-green-600 mt-2 font-semibold">✅ Verify first</p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border">
              <p className="font-bold">Unknown USB</p>
              <p className="text-sm">Plugging random device</p>
              <p className="text-green-600 mt-2 font-semibold">✅ Don’t use it</p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border">
              <p className="font-bold">Reward Scam</p>
              <p className="text-sm">“You won ₹5000!”</p>
              <p className="text-green-600 mt-2 font-semibold">✅ Ignore & verify</p>
            </div>

          </div>
        </div>

        {/* FINAL */}
        <div className="bg-primary/10 p-6 rounded-2xl border text-center">
          <h2 className="text-xl font-bold mb-2">🧠 Key Takeaways</h2>
          <p className="text-sm">
            Social engineering targets human psychology. Always verify before trusting and never act under pressure.
          </p>
        </div>

      </main>
    </div>
  )
}