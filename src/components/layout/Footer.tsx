import { site, proof } from '../../data/site'

export default function Footer() {
  return (
    <footer className="relative bg-ink border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="grid md:grid-cols-12 gap-y-10 gap-x-8">
          <div className="md:col-span-5">
            <p className="font-display text-2xl text-bone mb-3">
              DimSum <span className="text-rayu">&amp;</span> Ramen
            </p>
            <p className="t-body text-bone-dim text-sm max-w-xs">{proof.bowlsLine}</p>
          </div>

          <div className="md:col-span-3">
            <p className="t-meta text-bone-dim/70 mb-4 text-[0.625rem]">Miejsce</p>
            <p className="t-body text-bone-dim text-sm">
              {site.address.venue}
              <br />
              {site.address.street}
              <br />
              {site.address.postal} {site.address.city}
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="t-meta text-bone-dim/70 mb-4 text-[0.625rem]">Obserwuj</p>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm text-bone hover:text-amber transition-colors"
            >
              Instagram {site.instagram.handle}
            </a>
            <p className="t-body text-bone-dim/60 text-xs mt-3 max-w-xs">
              Stoisko w Food Hall Montownia — największym food hallu na Pomorzu, w halach dawnej Stoczni Gdańskiej.
            </p>
          </div>
        </div>

        <div className="rule my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 t-meta text-bone-dim/60 text-[0.625rem]">
          <span>© {new Date().getFullYear()} DimSum &amp; Ramen</span>
          <span>
            {site.geo.lat.toFixed(4)}° N · {site.geo.lng.toFixed(4)}° E
          </span>
        </div>
      </div>
    </footer>
  )
}
