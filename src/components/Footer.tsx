import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-6">
      <div className="section-container flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <a href="#top" className="hover:text-teal-400">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
