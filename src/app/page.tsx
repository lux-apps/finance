import Link from 'next/link'

const stats = [
  { label: 'Total Value Locked', value: '$0' },
  { label: 'Total Borrowed', value: '$0' },
  { label: 'Yield Generated', value: '$0' },
  { label: 'Active Loans', value: '0' },
]

const steps = [
  {
    step: '01',
    title: 'Bridge',
    description: 'Bridge your assets from any supported chain to Lux Network via the cross-chain bridge.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Deposit',
    description: 'Deposit your bridged collateral into Liquid Protocol vaults. Start earning yield immediately.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Borrow L*',
    description: 'Borrow L* synthetic tokens against your collateral. Up to 90% LTV in E-Mode for correlated assets.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Auto-Repay',
    description: 'Source chain yield automatically repays your debt over time. No manual payments required.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
]

const liquidTokens = [
  { symbol: 'LLUX', name: 'Liquid LUX', category: 'Native Lux' },
  { symbol: 'LAI', name: 'Liquid AI', category: 'Native Lux' },
  { symbol: 'LZOO', name: 'Liquid ZOO', category: 'Native Lux' },
  { symbol: 'LETH', name: 'Liquid ETH', category: 'Major L1s' },
  { symbol: 'LBTC', name: 'Liquid BTC', category: 'Major L1s' },
  { symbol: 'LSOL', name: 'Liquid SOL', category: 'Major L1s' },
  { symbol: 'LTON', name: 'Liquid TON', category: 'Major L1s' },
  { symbol: 'LADA', name: 'Liquid ADA', category: 'Major L1s' },
  { symbol: 'LAVAX', name: 'Liquid AVAX', category: 'Major L1s' },
  { symbol: 'LBNB', name: 'Liquid BNB', category: 'Major L1s' },
  { symbol: 'LPOL', name: 'Liquid POL', category: 'Major L1s' },
  { symbol: 'LUSD', name: 'Liquid USD', category: 'Stablecoins' },
]

const features = [
  {
    title: '90% LTV E-Mode',
    description: 'Maximum capital efficiency for correlated asset pairs. Borrow up to 90% of your collateral value.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'No Liquidation Fear',
    description: 'Yield-based repayment means your collateral is protected. Sleep soundly knowing your position is safe.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Yield Auto-Repay',
    description: 'Your source chain yield flows directly to debt repayment. Loans pay themselves off automatically.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Multi-Chain Collateral',
    description: 'Deposit assets from Ethereum, Solana, Bitcoin, and more. True cross-chain capital efficiency.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
]

const yieldStrategies = [
  {
    name: 'ETH Staking Yield',
    source: 'Ethereum',
    apy: '4-6%',
    description: 'Native staking rewards from Ethereum validators flow to your debt.',
  },
  {
    name: 'BTC Yield',
    source: 'Bitcoin L2s',
    apy: '2-5%',
    description: 'Yield from Bitcoin DeFi protocols on Stacks, Lightning, and others.',
  },
  {
    name: 'Stablecoin Yield',
    source: 'Multiple Chains',
    apy: '5-12%',
    description: 'Lending yields from battle-tested protocols across chains.',
  },
  {
    name: 'LUX Staking',
    source: 'Lux Network',
    apy: '8-15%',
    description: 'Validator rewards and protocol incentives from Lux Network.',
  },
]

const securityFeatures = [
  {
    title: 'Audited Contracts',
    description: 'Multiple independent audits by leading security firms.',
  },
  {
    title: 'Non-Custodial',
    description: 'Your keys, your assets. We never hold your funds.',
  },
  {
    title: 'Open Source',
    description: 'All contracts verified and publicly auditable.',
  },
  {
    title: 'Bug Bounty',
    description: '$500K bounty program for critical vulnerabilities.',
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
            <Link href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</Link>
            <Link href="#tokens" className="hover:text-foreground transition-colors">L* Tokens</Link>
            <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
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
          Liquid Protocol
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-center mb-6">
          LUX FINANCE
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-2xl mb-4">
          Self-repaying loans. Borrow against yield.
        </p>
        <p className="text-base text-muted-foreground/80 text-center max-w-xl mb-12">
          Deposit bridged collateral, borrow L* synthetic tokens, and let source chain yield automatically repay your debt.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="https://app.lux.finance"
            className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors"
          >
            Launch App
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

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Four steps to unlock liquidity without selling your assets.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <div key={item.step} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-px bg-border -translate-x-1/2 z-0" />
                )}
                <div className="bg-card border border-border backdrop-blur-sm rounded-lg p-6 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 text-foreground">
                    {item.icon}
                  </div>
                  <span className="text-3xl font-bold text-muted-foreground/30 mb-2 block">{item.step}</span>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-muted/30 border border-border rounded-lg max-w-3xl mx-auto">
            <p className="text-center text-muted-foreground">
              <span className="font-medium text-foreground">Example:</span> Bridge ETH from Ethereum, deposit as collateral, borrow LETH at 90% LTV, use LETH across DeFi while ETH staking yield auto-repays your loan.
            </p>
          </div>
        </div>
      </section>

      {/* Liquid Tokens */}
      <section id="tokens" className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">L* Liquid Tokens</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            12 liquid synthetic tokens at launch. Borrow L* tokens against your bridged collateral.
          </p>

          {/* Native Lux */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Native Lux</h3>
            <div className="grid grid-cols-3 gap-4">
              {liquidTokens.filter(t => t.category === 'Native Lux').map((token) => (
                <div
                  key={token.symbol}
                  className="bg-muted/50 border border-border backdrop-blur-sm rounded-lg p-4 hover:border-muted-foreground/50 transition-colors"
                >
                  <p className="text-lg font-bold">{token.symbol}</p>
                  <p className="text-sm text-muted-foreground">{token.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Major L1s */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Major L1s</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {liquidTokens.filter(t => t.category === 'Major L1s').map((token) => (
                <div
                  key={token.symbol}
                  className="bg-muted/50 border border-border backdrop-blur-sm rounded-lg p-4 hover:border-muted-foreground/50 transition-colors"
                >
                  <p className="text-lg font-bold">{token.symbol}</p>
                  <p className="text-sm text-muted-foreground">{token.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stablecoins */}
          <div>
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Stablecoins</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {liquidTokens.filter(t => t.category === 'Stablecoins').map((token) => (
                <div
                  key={token.symbol}
                  className="bg-muted/50 border border-border backdrop-blur-sm rounded-lg p-4 hover:border-muted-foreground/50 transition-colors"
                >
                  <p className="text-lg font-bold">{token.symbol}</p>
                  <p className="text-sm text-muted-foreground">{token.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Key Features</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Capital efficient borrowing with minimal liquidation risk.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card border border-border backdrop-blur-sm rounded-lg p-6 hover:border-muted-foreground/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 text-foreground">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yield Strategies */}
      <section id="yield" className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Yield Strategies</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Source chain yield flows directly to debt repayment.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {yieldStrategies.map((strategy) => (
              <div
                key={strategy.name}
                className="bg-muted/50 border border-border backdrop-blur-sm rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-muted-foreground px-2 py-1 bg-muted rounded">{strategy.source}</span>
                  <span className="text-lg font-bold text-foreground">{strategy.apy}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{strategy.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{strategy.description}</p>
              </div>
            ))}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Earning</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Deposit your bridged collateral. Borrow L* tokens. Let yield auto-repay your debt.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="https://app.lux.finance"
              className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors"
            >
              Launch App
            </Link>
            <Link
              href="https://bridge.lux.network"
              className="px-8 py-4 bg-muted border border-border backdrop-blur-sm font-medium rounded hover:bg-muted/80 transition-colors"
            >
              Bridge Assets
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
