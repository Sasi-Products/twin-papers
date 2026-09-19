import { Check, PackageCheck, Ruler, Layers3, Droplets, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import ProductCard from '../components/ProductCard'
import finch from '../assets/finch-party-napkin.jpg'
import premium from '../assets/premium-tissues.jpg'
import semiSoft from '../assets/semi-soft-tissues.jpg'
import bambuso from '../assets/bambuso.jpg'
import rangePoster from '../assets/product-range.jpg'

const products = [
  { image: finch, name: '27 × 30 cm Premium / Finch Party Napkin', tag: 'Soft • Hygienic • Care', specs: ['27 × 30 cm', '1 Ply', '15 GSM'], tone: 'blue' as const },
  { image: premium, name: '27 × 27 cm Premium Tissues', tag: 'Ultra Soft', specs: ['27 × 27 cm', '1 Ply', '15 GSM'], tone: 'blue' as const },
  { image: semiSoft, name: '27 × 27 cm Semi Soft Tissues', tag: 'Value Range', specs: ['27 × 27 cm', '1 Ply', '17 GSM'], tone: 'maroon' as const },
  { image: bambuso, name: '27 × 30 cm Bambuso Tissues', tag: 'Eco • Soft • Strong', specs: ['27 × 30 cm', '1 Ply', '17 GSM'], tone: 'green' as const },
]

const rollProducts = [
  { name: 'Toilet Roll — 350 Pulls', details: ['350 Pulls', '2 Ply', 'Extra Long Roll', 'High Absorbency'] },
  { name: 'Toilet Roll — 100 Pulls', details: ['100 Pulls', '2 Ply', 'Soft & Strong', 'Premium Use'] },
  { name: 'HRT Roll — 140 Metres', details: ['140 Metres', 'High Quality Paper', 'Ideal for Dispensers'] },
]

export default function Products() {
  return (
    <>
      <PageHero eyebrow="Products" title={<>A tissue range built for <span className="text-royal">real-world use.</span></>} text="Explore napkins, premium tissues, semi-soft tissues, eco options and roll products for retail, hospitality, offices, institutions and bulk buyers." />

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <Reveal><SectionTitle eyebrow="Facial & Table Tissue Range" title="Compact packs. Consistent performance." text="Multiple size, GSM and positioning options to suit different customer segments and price points." /></Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.map((p, i) => <Reveal key={p.name} delay={i * 80}><ProductCard {...p} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="bg-mist px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <Reveal><img src={rangePoster} alt="Twin Paper Products complete product range" className="w-full rounded-[34px] shadow-soft" /></Reveal>
          <Reveal delay={100}>
            <SectionTitle eyebrow="Roll Products" title={<>Reliable rolls for <span className="text-royal">busy spaces.</span></>} text="Designed for recurring use across hospitality, institutions, workplaces and general-purpose environments." />
            <div className="mt-8 space-y-4">
              {rollProducts.map((p, i) => (
                <div key={p.name} className="rounded-[24px] border border-white bg-white p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-royal">0{i + 5}</p><h3 className="mt-1 text-xl font-semibold text-ink">{p.name}</h3></div><span className="grid h-10 w-10 place-items-center rounded-full bg-sky/20 text-navy"><PackageCheck size={19}/></span></div>
                  <div className="mt-4 flex flex-wrap gap-2">{p.details.map(d => <span key={d} className="rounded-full bg-mist px-3 py-1.5 text-xs font-medium text-slate-600">{d}</span>)}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <Reveal><SectionTitle align="center" eyebrow="What can be customized?" title={<>Specify the details that matter to <span className="text-royal">your market.</span></>} /></Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {([
              [Ruler, 'Size', 'Custom dimensions based on product requirements.'],
              [Layers3, 'Ply', 'Choose the ply structure suited to your application.'],
              [Droplets, 'Absorbency & Feel', 'Position products around softness, strength and usage.'],
              [PackageCheck, 'Packaging', 'Custom pack presentation and branding options.'],
            ] as const).map(([Icon, title, text], i) => (
              <Reveal key={String(title)} delay={i * 80} className="h-full"><div className="h-full rounded-[28px] border border-slate-100 bg-white p-6 shadow-card"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-white"><Icon size={20}/></span><h3 className="mt-5 text-lg font-semibold text-ink">{String(title)}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{String(text)}</p></div></Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex justify-center"><Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-navy">Enquire for bulk pricing <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link></Reveal>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-[1320px] rounded-[36px] bg-[#eff7ff] p-6 sm:p-10 lg:p-14">
          <Reveal><p className="text-xs font-semibold uppercase tracking-[.2em] text-royal">Ideal for</p><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{['Hotels & Restaurants','Offices & Hospitals','Airlines & Institutions','Homes & General Use'].map(item => <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 text-sm font-semibold text-ink shadow-sm"><Check size={18} className="text-eco" />{item}</div>)}</div></Reveal>
        </div>
      </section>
    </>
  )
}
