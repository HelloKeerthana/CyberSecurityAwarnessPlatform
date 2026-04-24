import Navigation from '../components/Navigation'

export default function Browsing() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen">

      {/* Navbar */}
      <Navigation />

      {/* Main */}
      <main className="px-6 md:px-20 py-10 max-w-5xl mx-auto space-y-10">

        <h1 className="text-4xl font-black text-center">
          Safe Browsing Module
        </h1>

        {/* 1 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🌐 1. What is Safe Browsing?</h2>
          <p>
            Safe browsing means using the internet in a way that protects you from harmful websites, scams, and data theft.
          </p>
          <p className="text-primary font-semibold">
            👉 It’s about making smart and secure decisions online.
          </p>
        </div>

        {/* 2 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🎯 2. Why It Matters</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Protects your personal data</li>
            <li>Prevents tracking and spying</li>
            <li>Avoids malware infections</li>
            <li>Keeps your accounts secure</li>
          </ul>
        </div>

        {/* 3 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🔄 3. How Unsafe Browsing Happens</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Clicking unknown links</li>
            <li>Visiting fake websites</li>
            <li>Downloading unsafe files</li>
            <li>Ignoring browser warnings</li>
            <li>Falling for pop-ups</li>
          </ul>
        </div>

        {/* 4 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">⚠️ 4. Signs of Malicious Websites</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Suspicious or misspelled URL</li>
            <li>No HTTPS (no 🔒 lock)</li>
            <li>Too many pop-ups</li>
            <li>Fake login pages</li>
            <li>Urgent or scary messages</li>
          </ul>
        </div>

        {/* 5 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🔍 5. How to Check Website Safety</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Check URL carefully</li>
            <li>Look for HTTPS</li>
            <li>Verify domain name</li>
            <li>Avoid shortened links</li>
            <li>Search official website manually</li>
          </ul>
        </div>

        {/* 6 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🛡️ 6. Safe Practices</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Type URLs manually</li>
            <li>Bookmark trusted sites</li>
            <li>Avoid ads & pop-ups</li>
            <li>Use updated browsers</li>
            <li>Enable browser security settings</li>
          </ul>
        </div>

        {/* 7 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🔐 7. Protect Personal Info</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Don’t enter data on unknown sites</li>
            <li>Avoid saving passwords on shared devices</li>
            <li>Be careful with forms</li>
            <li>Always log out</li>
          </ul>
        </div>

        {/* 8 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🚫 8. Avoid These Behaviors</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Clicking random links</li>
            <li>Downloading pirated content</li>
            <li>Ignoring warnings</li>
            <li>Sharing personal info publicly</li>
            <li>Trusting “too good” offers</li>
          </ul>
        </div>

        {/* 9 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🚨 9. If You Visit a Suspicious Site</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Close the site immediately</li>
            <li>Do not enter information</li>
            <li>Clear browser data</li>
            <li>Run security scan</li>
            <li>Change passwords if needed</li>
          </ul>
        </div>

        {/* SCENARIOS */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">🎭 Real-Life Scenarios</h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border">
              <p className="font-bold">Fake Login Page</p>
              <p className="text-sm">Looks real but wrong URL</p>
              <p className="text-green-600 mt-2 font-semibold">✅ Check URL carefully</p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl border">
              <p className="font-bold">Fake Popup</p>
              <p className="text-sm">“Device infected!”</p>
              <p className="text-green-600 mt-2 font-semibold">✅ Close it</p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border">
              <p className="font-bold">Shortened Link</p>
              <p className="text-sm">bit.ly link</p>
              <p className="text-green-600 mt-2 font-semibold">✅ Avoid clicking</p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border">
              <p className="font-bold">Free Offer Scam</p>
              <p className="text-sm">“Free phone!”</p>
              <p className="text-green-600 mt-2 font-semibold">✅ Ignore & exit</p>
            </div>

          </div>
        </div>

        {/* FINAL */}
        <div className="bg-primary/10 p-6 rounded-2xl border text-center">
          <h2 className="text-xl font-bold mb-2">🧠 Key Takeaways</h2>
          <p className="text-sm">
            Always verify websites, avoid risky clicks, and protect your personal information.
            Small mistakes online can lead to big risks.
          </p>
        </div>

      </main>
    </div>
  )
}