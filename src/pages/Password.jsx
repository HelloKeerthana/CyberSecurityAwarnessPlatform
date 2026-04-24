import Navigation from '../components/Navigation'

export default function Password() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen">

      {/* Navbar */}
      <Navigation />

      {/* Main */}
      <main className="px-6 md:px-20 py-10 max-w-5xl mx-auto space-y-10">

        <h1 className="text-4xl font-black text-center">
          Password Security Module
        </h1>

        {/* 1 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🔐 1. What is Password Security?</h2>
          <p>
            Password security is the practice of creating and managing passwords to protect your accounts from unauthorized access.
          </p>
          <p className="text-primary font-semibold">
            👉 A strong password is your first line of defense.
          </p>
        </div>

        {/* 2 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🎯 2. Why Passwords Matter</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Personal data (photos, messages)</li>
            <li>Financial information (bank, UPI)</li>
            <li>Social media accounts</li>
            <li>Work or academic data</li>
          </ul>
          <p className="text-red-500 font-semibold">
            👉 Weak passwords can lead to account theft.
          </p>
        </div>

        {/* 3 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🧠 3. Strong Password Rules</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Long (12–16 characters)</li>
            <li>Mix of uppercase, lowercase, numbers, symbols</li>
            <li>Unpredictable</li>
            <li>Unique for each account</li>
          </ul>

          <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
            ✅ Strong: <b>T7!m#Sky_92@Blue</b>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
            ❌ Weak: 123456, password, keerthana123
          </div>
        </div>

        {/* 4 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">⚠️ 4. Common Mistakes</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Same password everywhere</li>
            <li>Using personal info</li>
            <li>Short/simple passwords</li>
            <li>Saving in plain text</li>
            <li>Sharing passwords</li>
          </ul>
        </div>

        {/* 5 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🔓 5. How Passwords Get Hacked</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Brute Force Attack</li>
            <li>Dictionary Attack</li>
            <li>Phishing</li>
            <li>Data Breaches</li>
          </ul>
        </div>

        {/* 6 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🛡️ 6. Protection Tips</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Use different passwords</li>
            <li>Enable 2FA</li>
            <li>Use password manager</li>
            <li>Avoid public devices</li>
            <li>Logout after use</li>
          </ul>
        </div>

        {/* 7 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🔐 7. What is 2FA?</h2>
          <p>
            Two-Factor Authentication adds an extra layer of security.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>OTP</li>
            <li>Authenticator app</li>
            <li>Fingerprint / Face ID</li>
          </ul>
          <p className="text-primary font-semibold">
            👉 Even if password is stolen, access is blocked.
          </p>
        </div>

        {/* 8 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🚨 8. If Password is Compromised</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Change password immediately</li>
            <li>Enable 2FA</li>
            <li>Log out from all devices</li>
            <li>Check suspicious activity</li>
          </ul>
        </div>

        {/* SCENARIOS */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">🎭 Real-Life Scenarios</h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border">
              <p className="font-bold">Same Password Everywhere</p>
              <p className="text-sm">One hack = all accounts compromised</p>
              <p className="text-green-600 mt-2 font-semibold">✅ Use unique passwords</p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl border">
              <p className="font-bold">Easy Password</p>
              <p className="text-sm">keerthana2005</p>
              <p className="text-green-600 mt-2 font-semibold">✅ Use complex passwords</p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border">
              <p className="font-bold">No 2FA</p>
              <p className="text-sm">Password alone is not enough</p>
              <p className="text-green-600 mt-2 font-semibold">✅ Enable 2FA</p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border">
              <p className="font-bold">Saved in Notes</p>
              <p className="text-sm">Plain text passwords</p>
              <p className="text-green-600 mt-2 font-semibold">✅ Use password manager</p>
            </div>

          </div>
        </div>

        {/* FINAL */}
        <div className="bg-primary/10 p-6 rounded-2xl border text-center">
          <h2 className="text-xl font-bold mb-2">🧠 Key Takeaways</h2>
          <p className="text-sm">
            Strong passwords protect your identity. Never reuse passwords and always enable 2FA.
          </p>
        </div>

      </main>
    </div>
  )
}