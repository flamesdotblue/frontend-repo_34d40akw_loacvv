import { CheckCircle2, Shield, Globe2, Award } from 'lucide-react'

const categories = [
  {
    title: 'Brass Rods',
    description: 'Precision-drawn round, hex, and square rods in multiple grades and dimensions for machining and fabrication.',
  },
  {
    title: 'Brass Billets',
    description: 'High-integrity billets engineered for consistent quality and superior downstream processing.',
  },
  {
    title: 'Brass Ingots',
    description: 'Refined ingots produced to international standards for reliable casting performance.',
  },
  {
    title: 'Copper Alloy Ingots',
    description: 'Tailored copper alloys optimized for conductivity, strength, and corrosion resistance.',
  },
  {
    title: 'Bronze Ingots',
    description: 'Durable bronze compositions for bearings, bushings, and industrial applications.',
  },
]

export default function ProductsSection() {
  return (
    <section id="products" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Products</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            A clean, grid-based catalog of our primary product categories. Each item reflects our commitment to
            precision and performance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-36 w-full rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">{cat.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{cat.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <a
                  href="#contact"
                  className="text-sm font-semibold text-amber-600 hover:text-amber-700"
                >
                  Request a Quote
                </a>
                <a
                  href="#quality"
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  View specs →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 p-6 bg-white">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-amber-600" />
              <h4 className="font-semibold text-gray-900">Over 60 Years of Expertise</h4>
            </div>
            <p className="mt-2 text-gray-600">
              Established in 1959, our legacy blends time-tested craftsmanship with modern manufacturing.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-6 bg-white">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-amber-600" />
              <h4 className="font-semibold text-gray-900">Unmatched Quality Assurance</h4>
            </div>
            <p className="mt-2 text-gray-600">
              Rigorous material checks and process controls ensure consistent, high-performing outputs.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-6 bg-white">
            <div className="flex items-center gap-3">
              <Globe2 className="h-6 w-6 text-amber-600" />
              <h4 className="font-semibold text-gray-900">Global Exporter</h4>
            </div>
            <p className="mt-2 text-gray-600">
              Serving customers across continents with dependable logistics and documentation.
            </p>
          </div>
        </div>

        <div id="about" className="mt-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Our Legacy in Metal Manufacturing</h3>
          <div className="mt-4 grid gap-8 md:grid-cols-2">
            <p className="text-gray-700 leading-relaxed">
              Since 1959, Kamani Tubes Limited has been at the forefront of India’s copper and copper alloy industry. Our
              journey is defined by precision, reliability, and a relentless focus on quality. Over decades, we have
              evolved with technology while staying true to the values that built our reputation: trust, integrity, and
              safety.
            </p>
            <div className="text-gray-700 leading-relaxed">
              <h4 className="font-semibold text-gray-900 mb-2">Our Mission & Vision</h4>
              <p>
                To engineer world-class copper and brass products that empower industries worldwide, delivered with
                unwavering quality and service excellence.
              </p>
              <h4 className="font-semibold text-gray-900 mt-4 mb-2">Our Values</h4>
              <ul className="space-y-1">
                <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5" />Trust</li>
                <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5" />Integrity</li>
                <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5" />Safety</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
            <h4 className="font-semibold text-gray-900">About Kalpana Saroj</h4>
            <p className="mt-2 text-gray-700">
              Under the visionary leadership of Ms. Kalpana Saroj, Kamani Tubes has transformed into a symbol of
              resilience and inclusive growth. Her inspiring journey from adversity to industry leadership continues to
              shape our culture of responsibility, innovation, and customer-centricity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
