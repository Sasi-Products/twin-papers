import { ArrowUpRight, Mail, MapPin, Phone, ReceiptText } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title={<>Let’s talk about your <span className="text-royal">paper-product requirement.</span></>} text="For product enquiries, bulk supply, private-label requirements or custom packaging discussions, contact Twin Paper Products directly." />

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="space-y-5">
            <Reveal><SectionTitle eyebrow="Reach Us" title="Twin Paper Products" text="Nasiyanur, Erode, Tamil Nadu, India." /></Reveal>
            <Reveal delay={80}><a href="tel:+916379771042" className="group flex items-start gap-4 rounded-[26px] border border-slate-100 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky/20 text-navy"><Phone size={20}/></span><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-400">Call</p><p className="mt-1 font-semibold text-ink">+91 63797 71042</p><p className="text-sm text-slate-500">+91 95246 74441</p></div><ArrowUpRight size={18} className="ml-auto text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></a></Reveal>
            <Reveal delay={120}><a href="mailto:twinpaperproducts@gmail.com" className="group flex items-start gap-4 rounded-[26px] border border-slate-100 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky/20 text-navy"><Mail size={20}/></span><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-400">Email</p><p className="mt-1 break-all font-semibold text-ink">twinpaperproducts@gmail.com</p></div><ArrowUpRight size={18} className="ml-auto text-slate-400"/></a></Reveal>
            <Reveal delay={160}><div className="flex items-start gap-4 rounded-[26px] border border-slate-100 bg-white p-5 shadow-card"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky/20 text-navy"><MapPin size={20}/></span><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-400">Address</p><p className="mt-1 font-semibold leading-7 text-ink">No. 1/3, Cheran Nagar,<br/>Nasiyanur, Erode - 638107,<br/>Tamil Nadu, India</p></div></div></Reveal>
            <Reveal delay={200}><div className="flex items-start gap-4 rounded-[26px] border border-slate-100 bg-white p-5 shadow-card"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky/20 text-navy"><ReceiptText size={20}/></span><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-400">GSTIN</p><p className="mt-1 font-semibold text-ink">33FRKPS3803M2ZB</p></div></div></Reveal>
          </div>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-[34px] border border-slate-100 bg-white p-2 shadow-soft">
              <iframe
                title="Twin Paper Products location"
                src="https://www.google.com/maps?q=No.%201%2F3%2C%20Cheran%20Nagar%2C%20Nasiyanur%2C%20Erode%20638107%2C%20Tamil%20Nadu%2C%20India&output=embed"
                className="h-[650px] w-full rounded-[28px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <Reveal className="mx-auto max-w-[1320px]"><div className="rounded-[36px] bg-ink p-8 text-white sm:p-10 lg:p-14"><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-xs font-semibold uppercase tracking-[.22em] text-sky">Quick enquiry checklist</p><h2 className="font-serif-display mt-3 text-4xl sm:text-5xl">Share a few details for a faster response.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-white/[0.65]">Product type, size, ply/GSM, approximate order quantity, delivery destination and whether you need Twin branding or private-label packaging.</p></div><a href="mailto:twinpaperproducts@gmail.com?subject=Product%20Enquiry%20-%20Twin%20Paper%20Products" className="inline-flex w-max items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-ink transition hover:bg-sky">Send Email <ArrowUpRight size={18}/></a></div></div></Reveal>
      </section>
    </>
  )
}
