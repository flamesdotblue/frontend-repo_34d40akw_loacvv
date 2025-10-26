import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thank you. Our team will contact you shortly.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900">Contact Us</h2>
            <p className="mt-3 text-gray-600">Get in touch for product details, pricing, and lead times.</p>

            <div className="mt-8 space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-900">Address</p>
                <p className="text-sm text-gray-600">Mumbai, Maharashtra, India</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Phone</p>
                <a className="text-sm text-amber-700" href="tel:+910000000000">+91 00000 00000</a>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Email</p>
                <a className="text-sm text-amber-700" href="mailto:sales@kamanitubes.com">sales@kamanitubes.com</a>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Business Hours</p>
                <p className="text-sm text-gray-600">Mon–Sat: 9:30 AM – 6:30 PM IST</p>
              </div>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps?q=Mumbai,India&output=embed"
                  className="h-48 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="text-lg font-semibold text-gray-900">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input required type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-amber-500 focus:ring-amber-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company</label>
                  <input required type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-amber-500 focus:ring-amber-500" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input required type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-amber-500 focus:ring-amber-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="tel" className="mt-1 w-full rounded-md border-gray-300 focus:border-amber-500 focus:ring-amber-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Product of Interest</label>
                <select className="mt-1 w-full rounded-md border-gray-300 focus:border-amber-500 focus:ring-amber-500">
                  <option>Brass Rods</option>
                  <option>Brass Billets</option>
                  <option>Brass Ingots</option>
                  <option>Copper Alloy Ingots</option>
                  <option>Bronze Ingots</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border-gray-300 focus:border-amber-500 focus:ring-amber-500" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-green-700">{status}</p>
                <button type="submit" className="inline-flex items-center rounded-md bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
