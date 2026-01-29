import Link from 'next/link'

const stats = [
  { label: 'Total Value Locked', value: '$50M+' },
  { label: 'Loans Issued', value: '$25M+' },
  { label: 'Yield Earned', value: '$5M+' },
  { label: 'Active Vaults', value: '10K+' },
]

const pillars = [
  {
    name: 'Earn',
    description: 'Deposit into yield-generating vaults. Your assets work for you around the clock.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    metric: '4-25% APY',
  },
  {
    name: 'Advance',
    description: 'Borrow against your future yield. Get liquidity today, repay with tomorrow\'s earnings.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    metric: '0% Interest',
  },
  {
    name: 'Stake',
    description: 'Lock LUX for veLUX. Vote on protocol parameters, treasury allocation, and strategy approvals.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    metric: 'Governance',
  },
]

const steps = [
  {
    step: '01',
    title: 'Deposit',
    description: 'Choose a vault and deposit your assets. They immediately begin earning yield.',
  },
  {
    step: '02',
    title: 'Advance',
    description: 'Take an advance against your future yield. Up to 50% of deposited value.',
  },
  {
    step: '03',
    title: 'Auto-Repay',
    description: 'Your vault yield automatically repays the advance. No liquidations, no interest.',
  },
]

const strategies = [
  {
    name: 'Stablecoin Vaults',
    assets: 'USDC, USDT, DAI',
    apy: '4-8%',
    risk: 'Low',
    description: 'Earn yield on stablecoins through battle-tested lending protocols.',
  },
  {
    name: 'ETH Staking',
    assets: 'ETH, stETH, rETH',
    apy: '4-6%',
    risk: 'Low',
    description: 'Liquid staking derivatives with automated compounding.',
  },
  {
    name: 'LUX Staking',
    assets: 'LUX, veLUX',
    apy: '10-25%',
    risk: 'Medium',
    description: 'Stake LUX for protocol rewards and governance power.',
  },
]

const securityFeatures = [
  {
    title: 'Audited Contracts',
    description: 'Multiple independent audits by leading security firms.',
  },
  {
    title: 'Bug Bounty',
    description: '$500K bounty program for critical vulnerabilities.',
  },
  {
    title: 'Non-Custodial',
    description: 'Your keys, your assets. We never hold your funds.',
  },
  {
    title: 'Open Source',
    description: 'All contracts verified and publicly auditable.',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-wider">
            LUX FINANCE
          </Link>
          <div className="hidden md:flex gap-8 text-sm text-muted-foreground">
            <Link href="#earn" className="hover:text-foreground transition-colors">Earn</Link>
            <Link href="#advance" className="hover:text-foreground transition-colors">Advance</Link>
            <Link href="#stake" className="hover:text-foreground transition-colors">Stake</Link>
            <Link href="https://docs.lux.network/finance" className="hover:text-foreground transition-colors">Docs</Link>
          </div>
          <Link
            href="https://app.lux.finance"
            className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-primary/90 transition-colors"
          >
            Launch App
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
          Self-Repaying Loans
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-center mb-6">
          LUX FINANCE
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-2xl mb-12">
          Self-repaying loans powered by yield. Borrow against your future earnings. Never pay interest.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="https://app.lux.finance"
            className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors"
          >
            Start Earning
          </Link>
          <Link
            href="https://docs.lux.network/finance"
            className="px-8 py-4 bg-card border border-border backdrop-blur-sm font-medium rounded hover:bg-muted transition-colors"
          >
            Read the Docs
          </Link>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6 border-y border-border bg-card backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section id="pillars" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Three Pillars</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A complete system for building wealth without selling your assets.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.name}
                className="bg-card border border-border backdrop-blur-sm rounded-lg p-8 hover:border-muted transition-colors"
              >
                <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center mb-6 text-foreground">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{pillar.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{pillar.description}</p>
                <p className="text-lg font-medium text-foreground">{pillar.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Three steps to unlock liquidity without selling your assets.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <div key={item.step} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border -translate-x-1/2" />
                )}
                <div className="bg-muted/50 border border-border backdrop-blur-sm rounded-lg p-8">
                  <span className="text-4xl font-bold text-muted-foreground/30 mb-4 block">{item.step}</span>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yield Strategies */}
      <section id="earn" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Yield Strategies</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Choose from battle-tested strategies across risk profiles.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {strategies.map((strategy) => (
              <div
                key={strategy.name}
                className="bg-card border border-border backdrop-blur-sm rounded-lg p-8 hover:border-muted transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{strategy.name}</h3>
                  <span className="text-sm text-muted-foreground px-2 py-1 bg-muted rounded">{strategy.risk}</span>
                </div>
                <p className="text-muted-foreground mb-4">{strategy.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">{strategy.assets}</span>
                  <span className="text-lg font-bold text-foreground">{strategy.apy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section id="stake" className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">veLUX Governance</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Lock LUX tokens to receive veLUX, your voting power in the protocol. Direct treasury allocation, approve new yield strategies, and set risk parameters.
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Vote on new vault strategies
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Direct protocol treasury allocation
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Set collateral and advance ratios
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Earn protocol revenue share
                </li>
              </ul>
            </div>
            <div className="bg-muted/50 border border-border backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6">Lock LUX for veLUX</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Lock Duration</span>
                  <span className="font-medium">1 week - 4 years</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Max Boost</span>
                  <span className="font-medium">4x voting power</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Revenue Share</span>
                  <span className="font-medium">50% of fees</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-muted-foreground">Current APY</span>
                  <span className="font-bold text-foreground">12-25%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Security First</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Your assets are protected by battle-tested infrastructure.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-card border border-border backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Building Wealth</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Deposit your assets. Earn yield. Borrow against your future earnings. No liquidations, no interest.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="https://app.lux.finance"
              className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors"
            >
              Launch App
            </Link>
            <Link
              href="https://discord.gg/luxnetwork"
              className="px-8 py-4 bg-muted border border-border backdrop-blur-sm font-medium rounded hover:bg-muted/80 transition-colors"
            >
              Join Discord
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">LUX FINANCE</h4>
              <p className="text-muted-foreground text-sm">
                Self-repaying loans powered by yield.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Protocol</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="https://app.lux.finance" className="hover:text-foreground transition-colors">App</Link></li>
                <li><Link href="https://docs.lux.network/finance" className="hover:text-foreground transition-colors">Docs</Link></li>
                <li><Link href="https://github.com/luxfi/finance" className="hover:text-foreground transition-colors">GitHub</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Ecosystem</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="https://lux.network" className="hover:text-foreground transition-colors">Lux Network</Link></li>
                <li><Link href="https://lux.exchange" className="hover:text-foreground transition-colors">Exchange</Link></li>
                <li><Link href="https://bridge.lux.network" className="hover:text-foreground transition-colors">Bridge</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="https://discord.gg/luxnetwork" className="hover:text-foreground transition-colors">Discord</Link></li>
                <li><Link href="https://twitter.com/luxfi" className="hover:text-foreground transition-colors">Twitter</Link></li>
                <li><Link href="https://t.me/luxfi" className="hover:text-foreground transition-colors">Telegram</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Lux Partners. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="https://lux.network/terms" className="hover:text-foreground transition-colors">Terms</Link>
              <Link href="https://lux.network/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
