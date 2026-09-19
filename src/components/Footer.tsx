import { Link } from 'react-router-dom'
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from 'lucide-react'

import logo from '../assets/twin-logo.png'

export default function Footer() {
  return (
    <footer className="bg-ink text-white">

      <div className="mx-auto max-w-[1500px] px-5 py-14 sm:px-8 lg:px-12">

        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.25fr_.75fr_.9fr]">

          <div>

            <div className="inline-flex rounded-2xl bg-white/5 px-4 py-3">

              <img
                src={logo}
                className="h-12 w-auto"
                alt="Twin Paper Products"
              />

            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
              Premium tissue paper manufacturer from Erode, Tamil Nadu —
              serving retail, hospitality, institutions, bulk buyers and
              private-label partners.
            </p>

          </div>

          <div>

            <p className="text-xs font-semibold uppercase tracking-[.22em] text-sky">
              Explore
            </p>

            <div className="mt-5 grid gap-3 text-sm text-white">

              <Link
                className="text-white transition hover:text-sky"
                to="/products"
              >
                Product Range
              </Link>

              <Link
                className="text-white transition hover:text-sky"
                to="/about"
              >
                About Us
              </Link>

              <Link
                className="text-white transition hover:text-sky"
                to="/private-label"
              >
                Customization & Private Label
              </Link>

              <Link
                className="text-white transition hover:text-sky"
                to="/contact"
              >
                Contact
              </Link>

            </div>

          </div>

          <div>

            <p className="text-xs font-semibold uppercase tracking-[.22em] text-sky">
              Contact
            </p>

            <div className="mt-5 space-y-4 text-sm text-white/70">

              <a
                className="flex gap-3 hover:text-white"
                href="tel:+916379771042"
              >
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0"
                />

                +91 63797 71042 / +91 95246 74441
              </a>

              <a
                className="flex gap-3 hover:text-white"
                href="mailto:twinpaperproducts@gmail.com"
              >
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0"
                />

                twinpaperproducts@gmail.com
              </a>

              <div className="flex gap-3">

                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0"
                />

                <span>
                  No. 1/3, Cheran Nagar, Nasiyanur,
                  Erode - 638107, Tamil Nadu, India
                </span>

              </div>

            </div>

          </div>

        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Twin Paper Products.
            All rights reserved.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Twin+Paper+Products+Cheran+Nagar+Nasiyanur+Erode+638107"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-white/65 hover:text-white"
          >
            Open in Google Maps

            <ArrowUpRight size={14} />
          </a>

        </div>

      </div>

    </footer>
  )
}