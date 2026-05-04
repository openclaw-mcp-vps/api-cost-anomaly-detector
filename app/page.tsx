export default function Home() {
  const faqs = [
    {
      q: 'Which API providers are supported?',
      a: 'OpenAI, AWS, Google Cloud, Anthropic, Azure, and more. Connect any provider with a billing API.'
    },
    {
      q: 'How does anomaly detection work?',
      a: 'We use time-series analysis on your historical usage data to flag cost spikes that deviate from your normal patterns before your bill arrives.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel anytime from your billing portal with no questions asked. Your data is exported before deletion.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          API Cost Intelligence
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Detect unusual API cost spikes<br />before bills arrive
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Monitor usage across OpenAI, AWS, Google Cloud and more. ML-powered anomaly detection predicts your monthly bill and alerts you the moment costs go off-track.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start monitoring — $15/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required for 7-day trial</p>
      </section>

      {/* Feature highlights */}
      <section className="grid grid-cols-1 gap-4 mb-20 sm:grid-cols-3">
        {[
          { icon: '📊', title: 'Real-time dashboard', desc: 'Live cost tracking across all connected providers in one view.' },
          { icon: '🤖', title: 'ML anomaly alerts', desc: 'Get notified the moment usage deviates from your baseline.' },
          { icon: '🔮', title: 'Bill prediction', desc: 'Know your projected monthly spend days before the invoice.' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-sm">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wider mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited API providers',
              'Real-time cost dashboard',
              'ML anomaly detection',
              'Monthly bill prediction',
              'Email & Slack alerts',
              '90-day usage history'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-[#8b949e] text-sm">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm mt-20">
        © {new Date().getFullYear()} API Cost Anomaly Detector. All rights reserved.
      </footer>
    </main>
  )
}
