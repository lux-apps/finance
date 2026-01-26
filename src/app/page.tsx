'use client'

import React from 'react'
import Link from 'next/link'

const pillars = [
  {
    name: 'Earn',
    description: 'Deposit into compliant yield strategies with transparent risk bands',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    color: 'from-green-500 to-emerald-600',
    apy: '4-25%',
  },
  {
    name: 'Advance',
    description: 'Unlock liquidity against future yield. Your vault yield repays the balance over time.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    color: 'from-blue-500 to-cyan-600',
    apy: '0% Interest',
  },
  {
    name: 'Stake',
    description: 'Govern treasury allocation, risk parameters, and ecosystem funding via veLUX',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    color: 'from-purple-500 to-indigo-600',
    apy: 'Governance',
  },
]

const features = [
  { title: 'Self-Repaying Loans', description: 'Advances repay automatically from yield. Never liquidated, never pay interest.' },
  { title: 'Non-Custodial', description: 'Your assets stay in your wallet. Smart contracts handle the rest.' },
  { title: 'Multi-Chain', description: 'Earn and advance across Lux, Ethereum, Arbitrum, Base, and more.' },
  { title: 'Audited', description: 'Multiple security audits by leading firms. Bug bounty program active.' },
]

const stats = [
  { label: 'Total Value Locked', value: '$50M+' },
  { label: 'Loans Issued', value: '$25M+' },
  { label: 'Yield Earned', value: '$5M+' },
  { label: 'Active Vaults', value: '10K+' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-wider">
            LUX
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="https://lux.network" className="hover:text-gray-300 transition-colors">Network</Link>
            <Link href="https://app.lux.finance" className="hover:text-gray-300 transition-colors">App</Link>
            <Link href="https://docs.lux.network/finance" className="hover:text-gray-300 transition-colors">Docs</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-8">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <p className="text-base text-gray-400 mb-4">
          Self-repaying loans powered by yield
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          LUX FINANCE
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
          Build wealth. Fund public goods. Prove every dollar.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="https://app.lux.finance"
            className="px-8 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition-colors font-medium"
          >
            Launch App
          </Link>
          <Link
            href="https://docs.lux.network/finance"
            className="px-8 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors border border-white/10"
          >
            Documentation
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Three Pillars</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Earn yield. Unlock liquidity. Govern the protocol.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.name}
                className="bg-black/50 border border-white/10 rounded-xl p-8 hover:border-white/20 transition-colors"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={pillar.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">{pillar.name}</h3>
                <p className="text-gray-400 mb-4">{pillar.description}</p>
                <p className="text-lg font-medium text-blue-400">{pillar.apy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-400">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Deposit</h3>
              <p className="text-gray-400">Deposit assets into yield-bearing vaults. Earn yield on your collateral automatically.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-400">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Advance</h3>
              <p className="text-gray-400">Take an advance against your future yield. Get liquidity today without selling.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Auto-Repay</h3>
              <p className="text-gray-400">Your vault yield automatically repays the advance. No liquidations, no interest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why LUX Finance?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Earn?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Deposit your assets and start earning yield today.
            Unlock liquidity without selling. Build wealth on your terms.
          </p>
          <Link
            href="https://app.lux.finance"
            className="inline-block px-8 py-4 bg-white text-black rounded-md hover:bg-gray-200 transition-colors font-medium"
          >
            Launch App
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Lux Finance. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="https://lux.network" className="hover:text-white transition-colors">Network</Link>
            <Link href="https://lux.credit" className="hover:text-white transition-colors">Credit</Link>
            <Link href="https://lux.exchange" className="hover:text-white transition-colors">Exchange</Link>
            <Link href="https://lux.fund" className="hover:text-white transition-colors">Fund</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
