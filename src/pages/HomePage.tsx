const recordRows = [
  ['Built', '1931'],
  ['Taken down', 'Mar 2026'],
  ['Species', 'Burma teak'],
  ['Recovered', '34 joists, 9 doors'],
  ['Pieces planned', '11'],
  ['List', '218 waiting'],
]

export function HomePage() {
  return (
    <main className="home-page">
      <section className="home-intro" aria-labelledby="home-title">
        <p className="record-meta">Record no. 07 <i>·</i> Girgaon, Mumbai <i>·</i> 1931–2026 <i>·</i> Burma teak</p>
        <h1 id="home-title" className="home-title">
          We don’t sell<br />
          furniture. We<br />
          sell the <em>building</em><br />
          it came from.
        </h1>
        <p className="home-description">
          Every piece is cut from one named building, on a date we can tell you, and is numbered against it. When the wood from that building runs out,<br className="desktop-break" /> the record closes. Nothing is reissued, and nothing is ever made twice.
        </p>
        <div className="home-actions">
          <a className="button button-primary" href="#the-register">Open the register</a>
          <a className="button button-secondary" href="#join-list">Join the list for Fanaswadi</a>
        </div>
      </section>

      <article className="building-record" aria-label="Fanaswadi Chawl building record">
        <header className="record-heading">
          <div>
            <h2>Fanaswadi<br />Chawl</h2>
            <p>Girgaon, Mumbai</p>
          </div>
          <span className="salvage-stamp">In salvage</span>
        </header>
        <dl className="record-details">
          {recordRows.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </article>
    </main>
  )
}
