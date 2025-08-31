import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white px-6 py-4 shadow-lg border-b-2 border-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Title */}
        <div className="flex items-center">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold font-display">Maleficium Tattoo</h1>
            <p className="text-xl text-gray-300 font-display">Das Tattoostudio im Herzen von St. Pölten</p>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-2xl hover:scale-110 transition-transform duration-200 font-display">
            Home
          </Link>
          <Link href="/gallery" className="text-2xl hover:scale-110 transition-transform duration-200 font-display">
            Gallery
          </Link>
          <Link href="/artists" className="text-2xl hover:scale-110 transition-transform duration-200 font-display">
            Artists
          </Link>
          <Link href="/studio" className="text-2xl hover:scale-110 transition-transform duration-200 font-display">
            Studio
          </Link>
          <Link href="/contact" className="text-2xl hover:scale-110 transition-transform duration-200 font-display">
            Contact
          </Link>
        </nav>

      </div>
    </header>
  );
}
