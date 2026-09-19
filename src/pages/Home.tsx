import { ArrowRight, ArrowUpRight, BadgeCheck, Factory, Globe2, Leaf, PackageCheck, Play, Plus, ShieldCheck, Sparkles, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import ProductCard from '../components/ProductCard'
import premium from '../assets/premium-tissues.jpg'
import finch from '../assets/finch-party-napkin.jpg'
import bambuso from '../assets/bambuso.jpg'
import semiSoft from '../assets/semi-soft-tissues.jpg'
import collection from '../assets/product-collection.jpg'
import warehouse from '../assets/warehouse-stock.jpg'
import video1 from '../assets/factory-video-1.mp4'

const products = [
  { image: finch, name: 'Finch Party Napkin', tag: 'Soft • Hygienic • Care', specs: ['27 × 30 cm', '1 Ply', '15 GSM'], tone: 'blue' as const },
  { image: premium, name: 'Premium Tissues', tag: 'Ultra Soft', specs: ['27 × 27 cm', '1 Ply', '15 GSM'], tone: 'blue' as const },
  { image: semiSoft, name: 'Semi Soft Tissues', tag: 'Affordable', specs: ['27 × 27 cm', '1 Ply', '17 GSM'], tone: 'maroon' as const },
  { image: bambuso, name: 'Bambuso Eco Tissues', tag: 'Eco Friendly', specs: ['27 × 30 cm', '1 Ply', '17 GSM'], tone: 'green' as const },
]

export default function Home() {
  return (
    <>
      <section className="relative min-h-[880px] overflow-hidden bg-[#eef7ff] pt-[76px] lg:min-h-[900px]">
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="absolute -left-24 top-16 h-[420px] w-[420px] rounded-full bg-sky/30 blur-3xl" />
        <div className="absolute -right-20 top-32 h-[360px] w-[360px] rounded-full bg-royal/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1500px] px-5 pb-10 pt-14 sm:px-8 lg:px-12 lg:pt-[5.3rem]">
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/[0.07]5 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-navy shadow-sm backdrop-blur-xl">
              <Sparkles size={15} className="text-royal" /> Premium Tissue Paper Manufacturer
            </div>
            <h1 className="font-serif-display mt-7 text-[clamp(54px,8vw,118px)] leading-[.88] tracking-[-.045em] text-ink">
              <span className="inline-block animate-word-pop delay-200">Softness</span>{' '}
              <span className="inline-block animate-word-pop delay-300">Made</span>{' '}
              <span className="inline-block animate-word-pop delay-400">Better.</span>
              <span className="mt-2 block">
                <span className="inline-block animate-word-pop delay-500">Quality</span>{' '}
                <span className="inline-block animate-word-pop delay-600">Made</span>{' '}
                <span className="inline-block animate-word-pop delay-700 text-royal">Twin.</span>
              </span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl animate-fade-up delay-800 text-base leading-7 text-slate-600 sm:text-lg">Premium tissues, toilet rolls and custom private-label paper products manufactured in Erode for homes, hospitality, institutions and bulk buyers.</p>
            <div className="mt-7 flex animate-fade-up delay-900 flex-wrap items-center justify-center gap-3">
              <Link to="/products" className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-ink/20 transition hover:-translate-y-0.5 hover:bg-navy">Explore Products <ArrowRight size={18} className="transition group-hover:translate-x-1" /></Link>
              <Link to="/private-label" className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/[0.85] px-6 py-3.5 text-sm font-semibold text-ink shadow-sm backdrop-blur transition hover:bg-white">Private Label <ArrowUpRight size={18} /></Link>
            </div>
          </div>

          <div className="relative z-20 mt-12 grid items-end gap-3 sm:grid-cols-2 lg:mt-[-2rem] lg:grid-cols-[1fr_1.3fr_1fr] lg:gap-4">
            <div className="animate-photo-reveal delay-800 lg:translate-y-24">
              <div className="group relative overflow-hidden rounded-[34px] bg-white shadow-soft">
                <img src={finch} alt="Finch party napkin" className="h-[310px] w-full object-cover sm:h-[360px] lg:h-[420px]" />
                <div className="absolute inset-x-4 bottom-4 rounded-[24px] bg-white/90 p-4 backdrop-blur-xl">
                  <div className="flex items-end justify-between gap-3">
                    <div><p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-500">Party Napkin</p><p className="mt-1 text-lg font-semibold text-ink">Finch — Soft & Hygienic</p></div>
                    <Link to="/products" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-white transition group-hover:rotate-6"><ArrowUpRight size={19} /></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-first animate-photo-reveal delay-600 sm:col-span-2 lg:order-none lg:col-span-1">
              <div className="group relative overflow-hidden rounded-[38px] bg-ink shadow-soft">
                <img src={collection} alt="Twin Paper Products collection" className="h-[390px] w-full object-cover sm:h-[440px] lg:h-[520px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 flex flex-col gap-5 sm:inset-x-8 sm:bottom-8 sm:flex-row sm:items-end sm:justify-between">
                  <div className="max-w-sm text-white"><p className="text-xs font-semibold uppercase tracking-[.2em] text-sky">Everyday comfort</p><h2 className="font-serif-display mt-2 text-4xl leading-none">Best products for your everyday needs.</h2></div>
                  <Link to="/products" className="group inline-flex w-max items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-sky/90">View Range <ArrowRight size={17} className="transition group-hover:translate-x-1" /></Link>
                </div>
              </div>
            </div>

            <div className="animate-photo-reveal delay-900 lg:translate-y-24">
              <div className="relative overflow-hidden rounded-[34px] bg-ink shadow-soft">
                <video src={video1} autoPlay muted loop playsInline className="h-[310px] w-full object-cover sm:h-[360px] lg:h-[420px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-4 text-white">
                  <div><p className="text-xs font-semibold uppercase tracking-[.16em] text-white/[0.65]">Inside Twin</p><p className="mt-1 text-lg font-semibold">Manufacturing in motion</p></div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-ink"><Play size={18} fill="currentColor" /></span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-30 mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 rounded-[28px] border border-white/80 bg-white/[0.85] p-4 shadow-card backdrop-blur-xl sm:grid-cols-4 lg:mt-28">
            {[
              ['Premium', 'Quality'], ['Bulk', 'Supply'], ['Private', 'Label'], ['India', 'Made']
            ].map(([a,b], i) => (
              <div key={a} className="flex items-center justify-center gap-3 px-3 py-2 text-center">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky/20 text-navy">{i === 0 ? <BadgeCheck size={17}/> : i === 1 ? <PackageCheck size={17}/> : i === 2 ? <Plus size={17}/> : <Globe2 size={17}/>}</span>
                <p className="text-sm font-semibold text-ink">{a}<br/><span className="font-medium text-slate-500">{b}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-slate-100 bg-white py-4">
        <div className="marquee-track flex items-center gap-10 pr-10 text-xs font-semibold uppercase tracking-[.22em] text-slate-400">
          {[...Array(2)].flatMap((_, set) => ['Ultra Soft', 'Hygienic', 'High Absorbency', 'Bulk Supply', 'Custom Packaging', 'Private Label', 'Made in Erode'].map((item, i) => <span key={`${set}-${i}`} className="flex items-center gap-10 whitespace-nowrap"><span>{item}</span><span className="h-1.5 w-1.5 rounded-full bg-sky" /></span>))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <Reveal><SectionTitle eyebrow="Our Product Range" title={<>Soft, strong and <span className="text-royal">made for every use.</span></>} text="From party napkins to premium tissues and eco-conscious options, our range is designed for dependable daily performance." /></Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((p, i) => <Reveal key={p.name} delay={i * 80}><ProductCard {...p} /></Reveal>)}
          </div>
          <Reveal className="mt-10 flex justify-center"><Link to="/products" className="group inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">See complete product range <ArrowRight size={17} className="transition group-hover:translate-x-1" /></Link></Reveal>
        </div>
      </section>

      <section className="bg-mist px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-[36px] shadow-soft"><img src={warehouse} alt="Twin Paper Products stock ready for supply" className="h-[520px] w-full object-cover lg:h-[650px]" /></div>
            <div className="absolute -bottom-5 -right-2 rounded-[26px] bg-ink p-5 text-white shadow-xl sm:right-6">
              <p className="font-serif-display text-4xl">Bulk Ready</p><p className="mt-1 text-sm text-white/[0.65]">Consistent supply for recurring buyers.</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionTitle eyebrow="Why Twin" title={<>Built around <span className="text-royal">quality, hygiene & consistency.</span></>} text="We manufacture with care, keep practical business needs in focus and support custom requirements for wholesale, hospitality and private-label customers." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {([
                [ShieldCheck, 'Quality Control', 'Attention to consistency across our tissue range.'],
                [Sparkles, 'Hygienic Process', 'Products designed for clean everyday use.'],
                [Factory, 'Manufacturing Support', 'Flexible production for business requirements.'],
                [Globe2, 'Bulk & Export Enquiries', 'Prepared for larger-volume buyer conversations.'],
              ] as const).map(([Icon, title, text]) => (
                <div key={String(title)} className="rounded-[24px] border border-white bg-white p-5 shadow-sm">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-sky/20 text-navy"><Icon size={20} /></span>
                  <h3 className="mt-4 font-semibold text-ink">{String(title)}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{String(text)}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <Reveal><SectionTitle align="center" eyebrow="Made for Business" title={<>One manufacturer. <span className="text-royal">Many possibilities.</span></>} text="Serve your customers with standard packs, custom specifications or your own private-label presentation." /></Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {([
              ['Custom Size & Ply', 'Choose the paper format and ply combination suited to your use case.', PackageCheck],
              ['Custom Packaging & Branding', 'Build packaging around your brand identity and target market.', Star],
              ['Private Label Manufacturing', 'Launch or expand your own tissue-paper label with manufacturing support.', Leaf],
            ] as const).map(([title, text, Icon], i) => (
              <Reveal key={String(title)} delay={i * 100} className="h-full">
                <div className="h-full rounded-[30px] border border-slate-100 bg-white p-7 shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-white"><Icon size={22} /></span>
                  <h3 className="mt-6 text-2xl font-semibold text-ink">{String(title)}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{String(text)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <Reveal className="mx-auto max-w-[1320px]">
          <div className="relative overflow-hidden rounded-[38px] bg-ink px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
            <div className="absolute -right-28 -top-24 h-80 w-80 rounded-full bg-sky/20 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div><p className="text-xs font-semibold uppercase tracking-[.22em] text-sky">Ready to source?</p><h2 className="font-serif-display mt-3 max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">Talk to Twin Paper Products about your next order.</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/[0.65] sm:text-base">Tell us the product, quantity, size, ply and branding requirement. We’ll help you plan the right supply option.</p></div>
              <Link to="/contact" className="group inline-flex w-max items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-ink transition hover:bg-sky">Request a Quote <ArrowUpRight size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
