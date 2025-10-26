export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Kamani Tubes Limited. All rights reserved.</p>
          <p className="text-sm">Made with precision and integrity.</p>
        </div>
      </div>
    </footer>
  )
}
