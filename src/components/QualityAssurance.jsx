const steps = [
  'Raw Material Sourcing',
  'Alloying & Melting',
  'Casting & Forming',
  'Heat Treatment',
  'Inspection & Testing',
  'Final Verification',
]

export default function QualityAssurance() {
  return (
    <section id="quality" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-semibold text-gray-900">Our Commitment to Quality</h2>
        <p className="mt-3 text-gray-600 max-w-3xl">
          We operate with stringent process controls, documented traceability, and certified testing to ensure every product meets international standards.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="sm:col-span-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Quality Control Process</h3>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {steps.map((s, i) => (
                <div key={s} className="rounded-lg border border-gray-200 p-4">
                  <p className="text-sm font-medium text-gray-900">Step {i + 1}</p>
                  <p className="mt-1 text-sm text-gray-600">{s}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Certifications</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc pl-5">
              <li>ISO 9001: Quality Management Systems</li>
              <li>Material Test Certificates (MTC) available</li>
              <li>Compliance with international standards on request</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
