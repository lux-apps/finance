import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          LUX Finance
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl">
          The Future of Decentralized Finance
        </p>
        <p className="text-lg text-gray-400 max-w-2xl">
          Comprehensive DeFi services including lending, borrowing, and yield optimization.
        </p>
      </section>

      {/* Feature Sections */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Yield Farming</h2>
          <p className="text-lg text-gray-400">Maximize returns on your crypto holdings with automated yield optimization strategies.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Liquidity Provision</h2>
          <p className="text-lg text-gray-400">Provide liquidity to earn trading fees and additional incentives.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Portfolio Management</h2>
          <p className="text-lg text-gray-400">Track and manage your entire DeFi portfolio from a single dashboard.</p>
        </div>
      </section>

    </main>
  )
}
