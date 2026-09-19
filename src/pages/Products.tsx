import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Droplets,
  Factory,
  Layers3,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

import { Link } from 'react-router-dom'

import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'

import finch from '../assets/finch-party-napkin.jpg'
import premium from '../assets/premium-tissues.jpg'
import semiSoft from '../assets/semi-soft-tissues.jpg'
import bambuso from '../assets/bambuso.jpg'

import toilet350 from '../assets/toilet-roll-350.jpg'
import toilet100 from '../assets/toilet-roll-100.jpg'
import hrt140 from '../assets/hrt-roll-140.jpg'

type Product = {
  id: string
  image: string
  name: string
  category: string
  description: string
  specs: string[]
  features: string[]
  accent: 'blue' | 'maroon' | 'green' | 'sky'

  objectPosition?: string
}

const tissueProducts: Product[] = [
  {
    id: 'finch',

    image: finch,

    name: 'Finch Party Napkin',

    category: 'Premium Party Napkin',

    description:
      'Soft and hygienic table napkins designed for restaurants, parties, events, hospitality and everyday dining.',

    specs: [
      '27 × 30 cm',
      '1 Ply',
      '15 GSM',
      '80 Sheets',
    ],

    features: [
      'Soft feel',
      'Hygienic',
      'Good absorbency',
      'Suitable for food service',
    ],

    accent: 'blue',

    objectPosition: 'center',
  },

  {
    id: 'premium',

    image: premium,

    name: 'Twin Premium Tissues',

    category: 'Premium Tissue',

    description:
      'Ultra-soft premium tissues designed for customers who need comfort, hygiene and dependable absorbency.',

    specs: [
      '27 × 27 cm',
      '1 Ply',
      '15 GSM',
      '80 Sheets',
    ],

    features: [
      'Ultra soft',
      'Hygienic',
      'High absorbency',
      'Premium finish',
    ],

    accent: 'blue',

    objectPosition: 'center',
  },

  {
    id: 'semi-soft',

    image: semiSoft,

    name: 'Twin Semi Soft Tissues',

    category: 'Value Tissue',

    description:
      'A practical and affordable tissue solution with good softness and strength for regular everyday usage.',

    specs: [
      '27 × 27 cm',
      '1 Ply',
      '17 GSM',
      '80 Sheets',
    ],

    features: [
      'Semi soft',
      'Hygienic',
      'Affordable',
      'Strong everyday tissue',
    ],

    accent: 'maroon',

    objectPosition: 'center',
  },

  {
    id: 'bambuso',

    image: bambuso,

    name: 'Bambuso Eco Tissues',

    category: 'Eco Tissue',

    description:
      'Eco-conscious tissue designed around softness, strength and a clean natural product presentation.',

    specs: [
      '27 × 30 cm',
      '1 Ply',
      '17 GSM',
      '80 Sheets',
    ],

    features: [
      'Eco friendly',
      'Soft',
      'Strong',
      'Biodegradable positioning',
    ],

    accent: 'green',

    objectPosition: 'center',
  },
]

const rollProducts: Product[] = [
  {
    id: 'toilet-350',

    image: toilet350,

    name: 'Toilet Roll — 350 Pulls',

    category: 'Toilet Roll',

    description:
      'Extra-long toilet roll designed for locations requiring longer usage cycles and dependable absorbency.',

    specs: [
      '350 Pulls',
      '2 Ply',
      'Extra Long Roll',
      'High Absorbency',
    ],

    features: [
      'Longer usage',
      'Soft texture',
      'High absorbency',
      'Suitable for commercial use',
    ],

    accent: 'sky',

    objectPosition: 'center',
  },

  {
    id: 'toilet-100',

    image: toilet100,

    name: 'Toilet Roll — 100 Pulls',

    category: 'Toilet Roll',

    description:
      'Compact soft and strong toilet roll suited to homes, hotels, offices and premium washroom applications.',

    specs: [
      '100 Pulls',
      '2 Ply',
      'Soft & Strong',
      'Premium Use',
    ],

    features: [
      'Soft feel',
      'Strong 2-ply construction',
      'Compact format',
      'Ideal for regular usage',
    ],

    accent: 'sky',

    objectPosition: 'center',
  },

  {
    id: 'hrt-140',

    image: hrt140,

    name: 'HRT Roll — 140 Metres',

    category: 'Dispenser Roll',

    description:
      'High-capacity HRT roll manufactured for dispensers in offices, restaurants, hospitals and commercial spaces.',

    specs: [
      '140 Metres',
      'High Quality Paper',
      'Dispenser Compatible',
      'Commercial Use',
    ],

    features: [
      'Long roll length',
      'High-quality paper',
      'Ideal for dispensers',
      'Suitable for busy locations',
    ],

    accent: 'blue',

    objectPosition: 'center',
  },
]

function getAccentClasses(
  accent: Product['accent'],
) {
  switch (accent) {
    case 'green':
      return {
        badge:
          'bg-[#edf8ed] text-[#1c6a38]',

        icon:
          'bg-[#edf8ed] text-[#1c6a38]',
      }

    case 'maroon':
      return {
        badge:
          'bg-[#fff1f4] text-[#8c253e]',

        icon:
          'bg-[#fff1f4] text-[#8c253e]',
      }

    case 'sky':
      return {
        badge:
          'bg-sky/20 text-navy',

        icon:
          'bg-sky/20 text-navy',
      }

    default:
      return {
        badge:
          'bg-[#eef5ff] text-royal',

        icon:
          'bg-[#eef5ff] text-royal',
      }
  }
}

function ProductCard({
  product,
  large = false,
}: {
  product: Product
  large?: boolean
}) {
  const colors =
    getAccentClasses(product.accent)

  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[30px]
        border
        border-slate-100
        bg-white
        shadow-card
        transition
        duration-500
        hover:-translate-y-1
        hover:shadow-soft
      "
    >

      {/* =============================================
          FULL WIDTH PRODUCT IMAGE

          No left/right padding
          No object-contain
          No text overlay
      ============================================= */}

      <div
        className={`
          relative
          w-full
          overflow-hidden
          bg-slate-100

          ${
            large
              ? 'h-[300px] sm:h-[360px] lg:h-[400px]'
              : 'h-[270px] sm:h-[300px] lg:h-[330px]'
          }
        `}
      >

        <img
          src={product.image}
          alt={product.name}
          style={{
            objectPosition:
              product.objectPosition ??
              'center',
          }}
          className="
            block
            h-full
            w-full
            object-cover
            transition
            duration-700
            ease-out
            group-hover:scale-[1.025]
          "
        />

      </div>

      {/* =============================================
          PRODUCT DETAILS

          Everything starts AFTER image
      ============================================= */}

      <div
        className="
          flex
          flex-1
          flex-col
          p-5
          sm:p-6
          lg:p-7
        "
      >

        <div>

          <span
            className={`
              inline-flex
              rounded-full
              px-3
              py-1.5
              text-[10px]
              font-semibold
              uppercase
              tracking-[.16em]

              ${colors.badge}
            `}
          >
            {product.category}
          </span>

          <h2
            className="
              mt-4
              text-[22px]
              font-semibold
              leading-[1.2]
              text-ink
              sm:text-2xl
            "
          >
            {product.name}
          </h2>

          <p
            className="
              mt-3
              text-sm
              leading-6
              text-slate-600
            "
          >
            {product.description}
          </p>

        </div>

        {/* =============================================
            SPECIFICATIONS
        ============================================= */}

        <div
          className="
            mt-5
            rounded-[20px]
            bg-[#f6f8fb]
            p-4
          "
        >

          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[.17em]
              text-slate-400
            "
          >
            Product Specification
          </p>

          <div
            className="
              mt-3
              flex
              flex-wrap
              gap-2
            "
          >

            {product.specs.map(
              (spec) => (
                <span
                  key={spec}
                  className="
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    px-3
                    py-1.5
                    text-xs
                    font-semibold
                    text-slate-600
                  "
                >
                  {spec}
                </span>
              ),
            )}

          </div>

        </div>

        {/* =============================================
            FEATURES
        ============================================= */}

        <div className="mt-5 space-y-2.5">

          {product.features.map(
            (feature) => (
              <div
                key={feature}
                className="
                  flex
                  items-center
                  gap-2.5
                  text-sm
                  text-slate-600
                "
              >

                <span
                  className={`
                    grid
                    h-5
                    w-5
                    shrink-0
                    place-items-center
                    rounded-full

                    ${colors.icon}
                  `}
                >

                  <Check
                    size={12}
                    strokeWidth={3}
                  />

                </span>

                <span>
                  {feature}
                </span>

              </div>
            ),
          )}

        </div>

        {/* =============================================
            ENQUIRY BUTTON
        ============================================= */}

        <div className="mt-auto pt-6">

          <Link
            to="/contact"
            className="
              group/button
              flex
              w-full
              items-center
              justify-between
              rounded-2xl
              bg-ink
              px-5
              py-3.5
              text-sm
              font-semibold
              text-white
              transition
              duration-300
              hover:bg-navy
            "
          >

            Enquire About Product

            <ArrowUpRight
              size={17}
              className="
                transition
                duration-300
                group-hover/button:translate-x-0.5
                group-hover/button:-translate-y-0.5
              "
            />

          </Link>

        </div>

      </div>

    </article>
  )
}

export default function Products() {
  return (
    <>

      {/* =============================================
          PAGE HERO
      ============================================= */}

      <PageHero
        eyebrow="Our Products"
        title={
          <>
            Tissue products made for{' '}
            <span className="text-royal">
              every requirement.
            </span>
          </>
        }
        text="
          Explore every Twin Paper Products item
          individually with clear product
          specifications, features and applications.
        "
      />

      {/* =============================================
          BENEFIT STRIP
      ============================================= */}

      <section
        className="
          border-b
          border-slate-100
          bg-white
          px-5
          py-8
          sm:px-8
          lg:px-12
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-[1320px]
            grid-cols-2
            gap-3
            md:grid-cols-4
          "
        >

          {[
            {
              icon: ShieldCheck,
              title: 'Quality',
              text: 'Controlled',
            },

            {
              icon: Sparkles,
              title: 'Hygienic',
              text: 'Production',
            },

            {
              icon: PackageCheck,
              title: 'Bulk',
              text: 'Supply',
            },

            {
              icon: Factory,
              title: 'Private',
              text: 'Label',
            },
          ].map(
            ({
              icon: Icon,
              title,
              text,
            }) => (
              <div
                key={title}
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-[20px]
                  bg-mist
                  px-3
                  py-4
                "
              >

                <span
                  className="
                    grid
                    h-9
                    w-9
                    shrink-0
                    place-items-center
                    rounded-full
                    bg-white
                    text-navy
                    shadow-sm
                  "
                >
                  <Icon size={17} />
                </span>

                <p
                  className="
                    text-sm
                    font-semibold
                    text-ink
                  "
                >
                  {title}

                  <br />

                  <span
                    className="
                      font-medium
                      text-slate-500
                    "
                  >
                    {text}
                  </span>

                </p>

              </div>
            ),
          )}

        </div>

      </section>

      {/* =============================================
          TISSUE PRODUCTS
      ============================================= */}

      <section
        className="
          px-5
          py-20
          sm:px-8
          lg:px-12
          lg:py-28
        "
      >

        <div
          className="
            mx-auto
            max-w-[1320px]
          "
        >

          <Reveal>

            <SectionTitle
              eyebrow="Tissue & Napkin Range"
              title={
                <>
                  Choose the right tissue for{' '}
                  <span className="text-royal">
                    every use.
                  </span>
                </>
              }
              text="
                Each product is shown separately
                with its own specifications and
                product details.
              "
            />

          </Reveal>

          <div
            className="
              mt-12
              grid
              gap-7
              md:grid-cols-2
            "
          >

            {tissueProducts.map(
              (product, index) => (
                <Reveal
                  key={product.id}
                  delay={index * 80}
                  className="h-full"
                >

                  <ProductCard
                    product={product}
                    large
                  />

                </Reveal>
              ),
            )}

          </div>

        </div>

      </section>

      {/* =============================================
          ROLL PRODUCTS
      ============================================= */}

      <section
        className="
          bg-mist
          px-5
          py-20
          sm:px-8
          lg:px-12
          lg:py-28
        "
      >

        <div
          className="
            mx-auto
            max-w-[1320px]
          "
        >

          <Reveal>

            <SectionTitle
              eyebrow="Roll Products"
              title={
                <>
                  Reliable paper rolls for{' '}
                  <span className="text-royal">
                    busy environments.
                  </span>
                </>
              }
              text="
                Individual toilet-roll and HRT-roll
                options for homes, hospitality,
                commercial spaces and institutional
                requirements.
              "
            />

          </Reveal>

          <div
            className="
              mt-12
              grid
              gap-7
              md:grid-cols-2
              xl:grid-cols-3
            "
          >

            {rollProducts.map(
              (product, index) => (
                <Reveal
                  key={product.id}
                  delay={index * 90}
                  className="h-full"
                >

                  <ProductCard
                    product={product}
                  />

                </Reveal>
              ),
            )}

          </div>

        </div>

      </section>

      {/* =============================================
          CUSTOM SPECIFICATION
      ============================================= */}

      <section
        className="
          px-5
          py-20
          sm:px-8
          lg:px-12
          lg:py-28
        "
      >

        <div
          className="
            mx-auto
            max-w-[1320px]
          "
        >

          <Reveal>

            <div
              className="
                grid
                overflow-hidden
                rounded-[36px]
                border
                border-slate-100
                bg-white
                shadow-card
                lg:grid-cols-[.85fr_1.15fr]
              "
            >

              {/* LEFT */}

              <div
                className="
                  bg-ink
                  p-7
                  text-white
                  sm:p-10
                  lg:p-12
                "
              >

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[.2em]
                    text-sky
                  "
                >
                  Product Flexibility
                </p>

                <h2
                  className="
                    font-serif-display
                    mt-4
                    text-4xl
                    leading-[1.06]
                    sm:text-5xl
                  "
                >
                  Need a different
                  product specification?
                </h2>

                <p
                  className="
                    mt-5
                    max-w-md
                    text-sm
                    leading-7
                    text-white/65
                    sm:text-base
                  "
                >
                  Twin Paper Products can
                  discuss custom sizes, ply,
                  packaging and private-label
                  requirements for suitable
                  bulk orders.
                </p>

                <Link
                  to="/private-label"
                  className="
                    group
                    mt-7
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-ink
                    transition
                    hover:bg-sky
                  "
                >

                  Explore Private Label

                  <ArrowRight
                    size={17}
                    className="
                      transition
                      group-hover:translate-x-1
                    "
                  />

                </Link>

              </div>

              {/* RIGHT */}

              <div
                className="
                  grid
                  gap-4
                  p-6
                  sm:grid-cols-2
                  sm:p-8
                  lg:p-10
                "
              >

                {[
                  {
                    icon: Ruler,
                    title: 'Custom Size',
                    description:
                      'Discuss tissue dimensions suited to your requirement.',
                  },

                  {
                    icon: Layers3,
                    title: 'Custom Ply',
                    description:
                      'Choose suitable ply options for different usage needs.',
                  },

                  {
                    icon: Droplets,
                    title: 'GSM & Absorbency',
                    description:
                      'Select characteristics based on softness and performance.',
                  },

                  {
                    icon: PackageCheck,
                    title: 'Custom Packaging',
                    description:
                      'Create packaging suitable for retail or institutional supply.',
                  },
                ].map(
                  ({
                    icon: Icon,
                    title,
                    description,
                  }) => (
                    <div
                      key={title}
                      className="
                        rounded-[24px]
                        bg-mist
                        p-5
                      "
                    >

                      <span
                        className="
                          grid
                          h-10
                          w-10
                          place-items-center
                          rounded-2xl
                          bg-white
                          text-navy
                          shadow-sm
                        "
                      >

                        <Icon size={19} />

                      </span>

                      <h3
                        className="
                          mt-4
                          font-semibold
                          text-ink
                        "
                      >
                        {title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-slate-600
                        "
                      >
                        {description}
                      </p>

                    </div>
                  ),
                )}

              </div>

            </div>

          </Reveal>

        </div>

      </section>

      {/* =============================================
          IDEAL FOR
      ============================================= */}

      <section
        className="
          px-5
          pb-20
          sm:px-8
          lg:px-12
          lg:pb-28
        "
      >

        <div
          className="
            mx-auto
            max-w-[1320px]
            rounded-[34px]
            bg-[#eef7ff]
            p-6
            sm:p-9
            lg:p-12
          "
        >

          <Reveal>

            <div className="text-center">

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[.2em]
                  text-royal
                "
              >
                Ideal For
              </p>

              <h2
                className="
                  font-serif-display
                  mx-auto
                  mt-3
                  max-w-3xl
                  text-3xl
                  leading-tight
                  text-ink
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Products designed for
                daily and commercial
                requirements.
              </h2>

            </div>

            <div
              className="
                mt-8
                grid
                gap-3
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >

              {[
                'Hotels & Restaurants',
                'Hospitals & Institutions',
                'Offices & Workplaces',
                'Homes & General Use',
                'Retail Stores',
                'Catering & Events',
                'Bulk Distributors',
                'Private Label Brands',
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    min-h-[68px]
                    items-center
                    gap-3
                    rounded-[18px]
                    bg-white
                    px-4
                    py-3.5
                    text-sm
                    font-semibold
                    text-ink
                    shadow-sm
                  "
                >

                  <span
                    className="
                      grid
                      h-7
                      w-7
                      shrink-0
                      place-items-center
                      rounded-full
                      bg-[#e8f6ec]
                      text-[#2a7d44]
                    "
                  >

                    <Check
                      size={15}
                      strokeWidth={3}
                    />

                  </span>

                  {item}

                </div>
              ))}

            </div>

          </Reveal>

        </div>

      </section>

      {/* =============================================
          FINAL CTA
      ============================================= */}

      <section
        className="
          px-5
          pb-20
          sm:px-8
          lg:px-12
          lg:pb-28
        "
      >

        <Reveal
          className="
            mx-auto
            max-w-[1320px]
          "
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[36px]
              bg-ink
              px-6
              py-12
              text-white
              sm:px-10
              lg:px-14
              lg:py-16
            "
          >

            <div
              className="
                absolute
                -right-20
                -top-24
                h-72
                w-72
                rounded-full
                bg-sky/20
                blur-3xl
              "
            />

            <div
              className="
                relative
                grid
                gap-8
                lg:grid-cols-[1fr_auto]
                lg:items-center
              "
            >

              <div>

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[.2em]
                    text-sky
                  "
                >
                  Bulk Enquiries
                </p>

                <h2
                  className="
                    font-serif-display
                    mt-3
                    max-w-3xl
                    text-4xl
                    leading-tight
                    sm:text-5xl
                  "
                >
                  Tell us which product
                  you need.
                </h2>

                <p
                  className="
                    mt-4
                    max-w-2xl
                    text-sm
                    leading-7
                    text-white/65
                    sm:text-base
                  "
                >
                  Contact Twin Paper Products
                  with the required product,
                  quantity, specifications and
                  packaging requirement.
                </p>

              </div>

              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  w-max
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  text-ink
                  transition
                  hover:bg-sky
                "
              >

                Request a Quote

                <ArrowUpRight
                  size={18}
                  className="
                    transition
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />

              </Link>

            </div>

          </div>

        </Reveal>

      </section>

    </>
  )
}