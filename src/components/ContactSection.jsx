export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Contact Us</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Reach out for product inquiries, quotations, or technical details. Our team will respond promptly.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900">Corporate Office</h3>
              <div className="mt-3 text-gray-700 space-y-1">
                <p>Kamani Chambers, 38, Ramjibhai Kamani Marg</p>
                <p>Ballard Estate, Mumbai, Maharashtra, India</p>
                <p>Business Hours: Mon–Fri, 9:30 AM – 6:30 PM IST</p>
                <p>Phone: +91-22-0000-0000</p>
                <p>Email: sales@kamanitubes.com</p>
              </div>
              <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  title="Kamani Tubes Location"
                  src="https://www.google.com/maps?q=Ballard%20Estate%2C%20Mumbai&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <form className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" required className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input type="text" required className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Product of Interest</label>
                <select className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500">
                  <option>Brass Rods</option>
                  <option>Brass Billets</option>
                  <option>Brass Ingots</option>
                  <option>Copper Alloy Ingots</option>
                  <option>Bronze Ingots</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500" />
              </div>
            </div>
            <div className="mt-6">
              <button type="submit" className="inline-flex items-center rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-600">
                Request a Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
