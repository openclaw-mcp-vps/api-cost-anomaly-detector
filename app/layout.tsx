import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Cost Anomaly Detector — Detect Unusual API Cost Spikes Before Bills Arrive',
  description: 'Monitor API usage patterns across OpenAI, AWS, Google Cloud and more. ML-powered anomaly detection and bill prediction for engineering teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f3a306a6-640d-4137-ba2b-7224932197a8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
