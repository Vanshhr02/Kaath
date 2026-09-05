const navigation = ['The Register', 'Method', 'Available', 'Commissions']

export function Header() {
  return (
    <header className="site-header">
      <a className="site-logo" href="/" aria-label="Kaath home">
        <span>Kaath</span>
        <i aria-hidden="true" />
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>{item}</a>
        ))}
      </nav>
      <p className="header-notice"><span aria-hidden="true" /> Now dismantling — Fanaswadi, Girgaon</p>
    </header>
  )
}
