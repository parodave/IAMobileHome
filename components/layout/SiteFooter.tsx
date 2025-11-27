export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-100 bg-white/90">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-ink/70 sm:px-6 lg:px-8 sm:flex-row sm:items-center sm:justify-between">
        <span>© {year} KHH Global Projects • Immobilier Maroc</span>
        <a href="#legal" className="transition hover:text-ink">
          Mentions légales
        </a>
      </div>
    </footer>
  );
}
