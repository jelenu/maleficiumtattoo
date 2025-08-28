export default function ContactSection() {
  return (
    <section className="h-screen snap-start flex flex-col items-center justify-center p-24 bg-black text-white">
      <h2 className="text-5xl font-bold text-center mb-8 font-display">Visit Us</h2>
      <p className="text-xl text-center max-w-2xl font-body text-gray-300 mb-8">
        Ready to start your tattoo journey? Come visit us in St. Pölten or get in touch to book your consultation.
      </p>
      <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-body text-lg transition-colors duration-200">
        Book Consultation
      </button>
    </section>
  );
}
