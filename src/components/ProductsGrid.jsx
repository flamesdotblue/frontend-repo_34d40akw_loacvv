const products = [
  {
    name: 'Brass Rods',
    description: 'Round, Hex, and Square rods in multiple grades and specifications.',
  },
  {
    name: 'Brass Billets',
    description: 'High-purity brass billets engineered for precision machining.',
  },
  {
    name: 'Brass Ingots',
    description: 'Consistent composition and superior metallurgical control.',
  },
  {
    name: 'Copper Alloy Ingots',
    description: 'Custom alloying for performance-critical applications.',
  },
]

export default function ProductsGrid() {
  return (
    <section id="products" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900">Featured Products</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Explore our core product categories engineered for reliability and performance.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-md bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600"
          >
            Request a Quote
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.name} className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] w-full rounded-lg bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_30%,#f59e0b_0,transparent_35%),radial-gradient(circle_at_70%_70%,#111827_0,transparent_30%)]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{p.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.description}</p>
              <div className="mt-4 flex items-center gap-3">
                <a href="#contact" className="text-sm font-semibold text-amber-600 hover:text-amber-700">Get Pricing →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
