export default function AboutIntro() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="uppercase tracking-widest text-xs text-gray-500">Our legacy</p>
            <h2 className="mt-2 text-3xl font-semibold text-gray-900">Our Legacy in Metal Manufacturing</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Founded in 1959, Kamani Tubes Limited has been at the forefront of copper and brass alloy manufacturing for over six decades. Our commitment to precision, safety, and integrity has enabled us to serve critical industries across the globe.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-4">
                <p className="text-2xl font-semibold text-gray-900">1959</p>
                <p className="text-sm text-gray-500">Established</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4">
                <p className="text-2xl font-semibold text-gray-900">ISO</p>
                <p className="text-sm text-gray-500">Certified Systems</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4">
                <p className="text-2xl font-semibold text-gray-900">Global</p>
                <p className="text-sm text-gray-500">Worldwide Exports</p>
              </div>
            </div>
            <div className="mt-6">
              <a href="#contact" className="text-amber-600 font-semibold hover:text-amber-700">Talk to Sales →</a>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-8 ring-1 ring-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">Mission & Vision</h3>
            <p className="mt-2 text-sm text-gray-700">
              To deliver high-performance copper and brass alloys with uncompromising quality, while innovating for sustainability and customer success.
            </p>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Our Values</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc pl-5">
              <li>Trust</li>
              <li>Integrity</li>
              <li>Safety</li>
            </ul>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">About Kalpana Saroj</h3>
            <p className="mt-2 text-sm text-gray-700">
              Inspired leadership has shaped our resurgence and growth. The story of Kalpana Saroj is a testament to resilience and purpose-driven leadership.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
