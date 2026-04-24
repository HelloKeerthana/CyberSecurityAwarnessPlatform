import Navigation from '../components/Navigation'

export default function Network() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen">

      {/* Navbar */}
      <Navigation />

      {/* Main */}
      <main className="px-6 md:px-20 py-10 max-w-5xl mx-auto space-y-10">

        <h1 className="text-4xl font-black text-center">
          Network Security Module
        </h1>

        {/* 1 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🌐 1. What is Network Security?</h2>
          <p>
            Network security protects computer networks and data from unauthorized access, misuse, or attacks.
          </p>
          <p>
            It ensures data is <b>confidential</b>, maintains <b>integrity</b>, and remains <b>available</b>.
          </p>
        </div>

        {/* 2 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🎯 2. Why It Matters</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Prevents data theft</li>
            <li>Stops unauthorized access</li>
            <li>Protects systems from damage</li>
          </ul>
          <p className="text-red-500 font-semibold">
            👉 Without security, your data can be intercepted.
          </p>
        </div>

        {/* 3 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🔄 3. How Attacks Happen</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Scanning for weak points</li>
            <li>Exploiting vulnerabilities</li>
            <li>Gaining access</li>
            <li>Stealing or damaging data</li>
          </ul>
        </div>

        {/* 4 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🧱 4. Key Components</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Firewall</li>
            <li>Antivirus / Anti-malware</li>
            <li>Encryption</li>
            <li>Authentication (passwords, 2FA)</li>
            <li>VPN</li>
          </ul>
        </div>

        {/* 5 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">⚠️ 5. Common Threats</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Man-in-the-Middle (MITM)</li>
            <li>Phishing</li>
            <li>Malware</li>
            <li>Denial-of-Service (DoS)</li>
            <li>Packet Sniffing</li>
          </ul>
        </div>

        {/* 6 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🔍 6. Warning Signs</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Slow internet</li>
            <li>Unknown devices connected</li>
            <li>Unusual data usage</li>
            <li>Frequent disconnections</li>
            <li>Unauthorized logins</li>
          </ul>
        </div>

        {/* 7 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🛡️ 7. Protection Tips</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Use strong Wi-Fi passwords</li>
            <li>Enable WPA2/WPA3</li>
            <li>Change router credentials</li>
            <li>Update firmware</li>
            <li>Monitor devices</li>
          </ul>
        </div>

        {/* 8 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🔐 8. Public Wi-Fi Safety</h2>
          <p>Public Wi-Fi is often unsecured and risky.</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Avoid banking/logins</li>
            <li>Use VPN</li>
            <li>Connect to trusted networks</li>
            <li>Disable auto-connect</li>
          </ul>
        </div>

        {/* 9 */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border space-y-4">
          <h2 className="text-xl font-bold">🚨 9. If Threat Detected</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Disconnect from network</li>
            <li>Change passwords</li>
            <li>Scan for malware</li>
            <li>Check devices</li>
            <li>Secure router</li>
          </ul>
        </div>

        {/* SCENARIOS */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">🎭 Real-Life Scenarios</h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border">
              <p className="font-bold">Public Wi-Fi Login</p>
              <p className="text-sm">Bank login on free Wi-Fi</p>
              <p className="text-green-600 mt-2 font-semibold">✅ Avoid or use VPN</p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl border">
              <p className="font-bold">Default Password</p>
              <p className="text-sm">Router = admin123</p>
              <p className="text-green-600 mt-2 font-semibold">✅ Change password</p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border">
              <p className="font-bold">Unknown Device</p>
              <p className="text-sm">Stranger connected</p>
              <p className="text-green-600 mt-2 font-semibold">✅ Disconnect & secure</p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border">
              <p className="font-bold">Fake Wi-Fi</p>
              <p className="text-sm">“Free_Airport_WiFi”</p>
              <p className="text-green-600 mt-2 font-semibold">✅ Verify network</p>
            </div>

          </div>
        </div>

        {/* FINAL */}
        <div className="bg-primary/10 p-6 rounded-2xl border text-center">
          <h2 className="text-xl font-bold mb-2">🧠 Key Takeaways</h2>
          <p className="text-sm">
            Networks are constant targets. Secure your Wi-Fi, avoid risky connections, and stay alert.
          </p>
        </div>

      </main>
    </div>
  )
}