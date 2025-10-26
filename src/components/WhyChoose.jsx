const bullets = [
  {
    title: 'Over 60 Years of Expertise',
    desc: 'Established in 1959, trusted by OEMs and distributors worldwide.',
  },
  {
    title: 'Unmatched Quality Assurance',
    desc: 'Tight process controls, documented traceability, and rigorous inspection.',
  },
  {
    title: 'Global Exporter',
    desc: 'Reliable delivery schedules and export-ready documentation.',
  },
]

export default function WhyChoose() {
  return (
    <section id="why" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-semibold text-gray-900">Why Choose Us?</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bullets.map((b) => (
            <div key={b.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-full bg-amber-500/15 ring-1 ring-amber-500/30 flex items-center justify-center">
                <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{b.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
