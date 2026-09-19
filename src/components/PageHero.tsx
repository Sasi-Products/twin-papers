import type { ReactNode } from 'react'

type Props = { eyebrow: string; title: ReactNode; text: string }

export default function PageHero({ eyebrow, title, text }: Props) {
  return (
    <section className="relative overflow-hidden bg-mist px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-24 lg:pt-40">
      <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-sky/25 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-royal/10 blur-3xl" />
      <div className="relative mx-auto max-w-[1320px]">
        <p className="animate-fade-up text-xs font-semibold uppercase tracking-[.25em] text-royal">{eyebrow}</p>
        <h1 className="font-serif-display mt-5 max-w-5xl animate-text-reveal text-[clamp(48px,7vw,94px)] leading-[.96] tracking-[-.035em] text-ink">{title}</h1>
        <p className="delay-200 mt-7 max-w-2xl animate-fade-up text-base leading-8 text-slate-600 sm:text-lg">{text}</p>
      </div>
    </section>
  )
}
