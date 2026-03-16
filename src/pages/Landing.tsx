import { Shield, Zap, Brain, Link as LinkIcon, BarChart3 } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-[#1f2937]">
        <h1 className="text-2xl font-bold text-red-500 flex items-center gap-2">
          <Shield className="text-red-500" />
          PhishGuard AI
        </h1>

        <SignInButton mode="redirect" forceRedirectUrl="/app">
          <button className="bg-red-500 px-5 py-2 rounded-lg font-semibold hover:bg-red-600 transition">
            Sign In
          </button>
        </SignInButton>
      </nav>

      {/* Hero */}
      <section className="text-center py-24 px-6">
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          AI Powered <span className="text-red-500">Phishing Detection</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
          PhishGuard analyzes suspicious links, domains, and emails using AI
          to protect users from phishing attacks and malicious websites in
          real-time.
        </p>

        <SignInButton mode="redirect" forceRedirectUrl="/app">
          <button className="bg-red-500 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-red-600 transition">
            Get Started
          </button>
        </SignInButton>
      </section>

      {/* Features */}
      <section className="px-8 pb-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          Powerful Security Features
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

          <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 text-center">
            <Brain className="mx-auto mb-4 text-red-500" size={40} />
            <h3 className="text-xl font-semibold mb-2">AI Detection</h3>
            <p className="text-gray-400">
              Advanced AI models analyze links and domains for phishing patterns.
            </p>
          </div>

          <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 text-center">
            <Zap className="mx-auto mb-4 text-red-500" size={40} />
            <h3 className="text-xl font-semibold mb-2">Real-Time Analysis</h3>
            <p className="text-gray-400">
              Instantly scan URLs and detect threats within seconds.
            </p>
          </div>

          <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 text-center">
            <LinkIcon className="mx-auto mb-4 text-red-500" size={40} />
            <h3 className="text-xl font-semibold mb-2">Link Intelligence</h3>
            <p className="text-gray-400">
              Detect suspicious domains and spoofed websites.
            </p>
          </div>

          <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 text-center">
            <BarChart3 className="mx-auto mb-4 text-red-500" size={40} />
            <h3 className="text-xl font-semibold mb-2">Threat Reports</h3>
            <p className="text-gray-400">
              Get detailed security reports and risk scores.
            </p>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#111827] py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto text-center">

          <div>
            <div className="text-red-500 text-5xl mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Paste URL</h3>
            <p className="text-gray-400">
              Enter a suspicious link or domain into the scanner.
            </p>
          </div>

          <div>
            <div className="text-red-500 text-5xl mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
            <p className="text-gray-400">
              Our AI engine analyzes the URL for phishing indicators.
            </p>
          </div>

          <div>
            <div className="text-red-500 text-5xl mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Threat Report</h3>
            <p className="text-gray-400">
              Receive a security score and detailed analysis.
            </p>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-8 text-center">
        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">

          <div>
            <h3 className="text-4xl font-bold text-red-500">10M+</h3>
            <p className="text-gray-400">Links Scanned</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-red-500">500K+</h3>
            <p className="text-gray-400">Phishing Attacks Blocked</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-red-500">99.9%</h3>
            <p className="text-gray-400">Detection Accuracy</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center pb-24">
        <h2 className="text-4xl font-bold mb-6">
          Start Protecting Yourself Today
        </h2>

        <SignInButton mode="redirect" forceRedirectUrl="/app">
          <button className="bg-red-500 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-red-600 transition">
            Launch PhishGuard
          </button>
        </SignInButton>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1f2937] text-center py-6 text-gray-500">
        © 2026 PhishGuard AI — Protecting users from phishing attacks.
      </footer>

    </div>
  );
};

export default Landing;