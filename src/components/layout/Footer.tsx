export default function Footer() {
  return (
    <footer className="relative bg-ink border-t border-gold/10 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-cream-dim/70">
        <div className="flex items-center gap-2">
          <span className="font-jp text-gold">麺</span>
          <span>Dim Sum Ramen — Food Hall Montownia, Gdańsk</span>
        </div>
        <span>&copy; {new Date().getFullYear()} Dim Sum Ramen. Wszystkie prawa zastrzeżone.</span>
      </div>
    </footer>
  )
}
