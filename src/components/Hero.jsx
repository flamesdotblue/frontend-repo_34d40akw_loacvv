import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-white">
        <div className="max-w-3xl">
          <p className="uppercase tracking-widest text-amber-400 text-xs mb-4">Since 1959</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Kamani Tubes: Precision in Copper and Brass Alloys Since 1959.
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-2xl">
            Leading manufacturer and exporter of high-quality brass rods, ingots, billets, and more.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-600"
            >
              Explore Our Products
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/30 hover:bg-white/20"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
