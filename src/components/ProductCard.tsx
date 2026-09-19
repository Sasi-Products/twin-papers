import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type Props = {
  image: string
  name: string
  tag: string
  specs: string[]
  tone?: 'blue' | 'green' | 'maroon'
}

export default function ProductCard({ image, name, tag, specs, tone = 'blue' }: Props) {
  const toneClass = tone === 'green' ? 'bg-eco text-white' : tone === 'maroon' ? 'bg-maroon text-white' : 'bg-navy text-white'
  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-card transition duration-500 hover:-translate-y-1.5 hover:shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img src={image} alt={name} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[.12em] ${toneClass}`}>{tag}</span>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-ink">{name}</h3>
          <Link to="/contact" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-mist text-ink transition group-hover:bg-ink group-hover:text-white" aria-label={`Enquire about ${name}`}><ArrowUpRight size={18} /></Link>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {specs.map(spec => <span key={spec} className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">{spec}</span>)}
        </div>
      </div>
    </article>
  )
}
